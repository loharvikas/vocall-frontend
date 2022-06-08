import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Card, Modal } from "../../components";
import styled from "styled-components";
import { EditSVG, DeleteCardSVG, PreviewSVG, VocallSVG, CodePreviewSVG } from "../../assets/icons";
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
    const [apiKeyView, setAPIKeyView] = useState('');

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
        return () => setVoices([]);
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

    const handleAPIKeyView = (voice) => {
        setVoice(voice);
        setAPIKeyView(true);
    }

    return (

        <>
            {apiKeyView && ReactDOM.createPortal(<APIKeyView voice={voice} setAPIKeyView={setAPIKeyView} />, document.body)}
            {edit && ReactDOM.createPortal(<Edit voice={voice} setEdit={setEdit} user={user} voices={voices} setVoices={setVoices} />, document.body)}
            {del && ReactDOM.createPortal(<Delete voice={voice} setDel={setDel} voices={voices} setVoices={setVoices} />, document.body)}
            {preview && ReactDOM.createPortal(<Preview voice={voice} setPreview={setPreview} />, document.body)}
            <h1 style={{ marginTop: '30px' }}>Voices</h1>
            {voices.length > 0 ? <Wrapper>
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
                            <Card.Button onClick={() => handleAPIKeyView(item)}><CodePreviewSVG /></Card.Button>
                        </Card.Footer>
                    </Card>
                ))}

            </Wrapper > : <Container> <VocallSVG /><br /> <h3> You haven't create any voices yet!</h3></Container>}
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
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <AudioContainer audioUrl={voice.file} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Cancel onClick={() => setPreview(false)} >Cancel</Modal.Cancel>
                </Modal.Footer>
            </Modal.Inner>
        </Modal>
    )
}

const APIKeyView = ({ voice, setAPIKeyView }) => {
    return (
        <Modal>
            <Modal.Inner width='30%'>
                <Modal.Header>
                    <Modal.Title>APIKey</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <h5>{`https://vocall.vercel.app/voices/iframe/${voice.uuid}`}</h5>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Cancel onClick={() => setAPIKeyView(false)} >Cancel</Modal.Cancel>
                </Modal.Footer>
            </Modal.Inner>
        </Modal>
    )
}

const Edit = ({ voice, setEdit, user, voices, setVoices }) => {

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
            .put(`voice/update/${voice.uuid}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            )
            .then(res => {
                setMessage({
                    type: STYLES.FORM_SUCCESS,
                    content: 'Your information is successfully updated!'
                });
                setLoading(false);
                setEdit(false);
                voices = voices.map(item => {
                    if (item.uuid === voice.uuid) {
                        return res?.data
                    }
                    return item;
                })
                setVoices(voices);
            })
            .catch(() => {
                setMessage({
                    type: STYLES.FORM_ERROR,
                    content: 'Invalid inputs'
                });
                setLoading(false);
            })
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



const Delete = ({ voice, setDel, voices, setVoices }) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        axiosInstance
            .delete(`voice/delete/${voice.uuid}/`)
            .then(() => {
                setLoading(false);
                voices = voices.filter(item => item.uuid !== voice.uuid);
                setVoices(voices);
                setDel(false);
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

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
`


export default VoiceContainer;