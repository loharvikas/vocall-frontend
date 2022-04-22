import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Card, Modal } from "../../components";
import styled from "styled-components";
import { EditSVG, DeleteCardSVG, PreviewSVG } from "../../assets/icons";
import { Form } from "../../components";
import { Group, Loader, LoaderWrapper } from "../../globalStyles";
import Recorder from "./RecordContainer";
import axiosInstance from '../../lib/axios';
import { useEffect } from 'react';
import { AudioContainer } from '..';
import * as STYLES from '../../constant/styles';




const VoiceContainer = ({ user }) => {
    const [edit, setEdit] = useState(false);
    const [preview, setPreview] = useState(false);
    const [del, setDel] = useState(false);
    const [voices, setVoices] = useState([]);
    const [voice, setVoice] = useState(null);

    useEffect(() => {
        axiosInstance
            .get('voice/')
            .then(res => {
                const data = res.data
                setVoices(data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    const handlePreview = (voice) => {
        setVoice(voice);
        setPreview(true);
    }

    const handleEdit = (voice) => {
        setVoice(voice);
        setEdit(true);
    }

    const handleDel = (voice) => {
        setVoice(voice);
        setDel(true);
    }

    return (

        <>
            {edit && ReactDOM.createPortal(<Edit voice={voice} setEdit={setEdit} user={user} />, document.body)}
            {del && ReactDOM.createPortal(<Delete voice={voice} setDel={setDel} />, document.body)}
            {preview && ReactDOM.createPortal(<Preview voice={voice} setPreview={setPreview} />, document.body)}
            <h1 style={{ marginTop: '30px' }}>Voices</h1>
            <Wrapper>
                {voices.map(item => (

                    <Card key={item.uuid}>
                        <Card.Header>
                            Speak Vocall
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.SubTitle>{item.description}</Card.SubTitle>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Button onClick={() => handleDel(item)}><DeleteCardSVG /></Card.Button>
                            <Card.Button onClick={() => handlePreview(item)}><PreviewSVG /></Card.Button>
                            <Card.Button onClick={() => handleEdit(item)}><EditSVG /></Card.Button>
                        </Card.Footer>
                    </Card>
                ))}
            </Wrapper >
        </>
    )
}



const Preview = ({ voice, setPreview }) => {
    return (
        <Modal>
            <Modal.Inner width='30%'>
                <Modal.Header>
                    <Modal.Title>Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AudioContainer audioUrl={voice.file} />
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Cancel onClick={() => setPreview(false)} >Cancel</Modal.Cancel>
                </Modal.Footer>
            </Modal.Inner>
        </Modal>
    )
}

const Edit = ({ voice, setEdit, user }) => {

    const [name, setName] = useState(voice.name);
    const [description, setDescription] = useState(voice.description);
    const [audioFile, setAudioFile] = useState('');
    const [audioUrl, setAudioUrl] = useState();
    const [message, setMessage] = useState({
        type: '',
        content: ''
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = e => {

        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append("file", audioFile)
        formData.append("user", user.id)
        formData.append("name", name)
        formData.append("description", description)
        axiosInstance
            .patch(`voice/${voice.uuid}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
                .then(res => {
                    setMessage({
                        type: STYLES.FORM_SUCCESS,
                        content: 'Your information is successfully updated!'
                    });
                    setLoading(false);
                })
                .catch(() => {
                    setMessage({
                        type: STYLES.FORM_ERROR,
                        content: 'Invalid inputs'
                    });
                    setLoading(false);
                })
            )
    }

    return (
        <Modal>
            <Modal.Inner>
                {loading && <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>}
                <Modal.Header>
                    <Modal.Title>Hello</Modal.Title>
                    <Modal.SubTitle>No Hello</Modal.SubTitle>
                </Modal.Header>
                <Modal.Body>
                    <div>

                        <Form.Base>
                            {message.content.length > 0 && <Form.Message type={message.type} display='block'>
                                {message.content}</Form.Message>}
                            <Group>
                                <Form.Label>Voicy name</Form.Label>
                                <Form.Input name='name' onChange={e => setName(e.target.value)} value={name} />
                            </Group>
                            <Group>
                                <Form.Label>Description</Form.Label>
                                <Form.TextArea name='description' onChange={e => setDescription(e.target.value)} value={description} />
                            </Group>
                            <Recorder setAudioFile={setAudioFile} audioFile={audioFile} audioUrl={audioUrl} setAudioUrl={setAudioUrl} />
                        </Form.Base>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Modal.Save onClick={handleSubmit}>Save changes</Modal.Save>
                    <Modal.Cancel onClick={() => setEdit(false)}>Cancel</Modal.Cancel>
                </Modal.Footer>
            </Modal.Inner>
        </Modal >
    )
}


const Delete = ({ voice, setDel }) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        axiosInstance
            .delete(`voice/${voice.uuid}/`)
            .then(() => {
                setLoading(false);
                setDel(false);
                // window.location.reload();
            })
            .catch(err => {
                setLoading(false)
            }
            )
    }

    return (
        <Modal>
            <Modal.Inner width='30%'>
                {loading && <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>}
                <Modal.Header>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Are you sure you want to delete ?</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Save onClick={handleSubmit}>Delete</Modal.Save>
                    <Modal.Cancel onClick={() => setDel(false)}>Cancel</Modal.Cancel>
                </Modal.Footer>
            </Modal.Inner>
        </Modal >
    )
}

const Wrapper = styled.div`
margin-top: 30px;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`


export default VoiceContainer;