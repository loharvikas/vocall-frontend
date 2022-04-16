import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Card, Modal } from "../../components";
import styled from "styled-components";
import { EditSVG, DeleteCardSVG, PreviewSVG } from "../../assets/icons";
import { Form } from "../../components";
import { Frame, Group } from "../../globalStyles";
import Recorder from "./RecordContainer";
import axiosInstance from '../../lib/axios';



const VoiceContainer = () => {
    const [edit, setEdit] = useState(false);
    const [preview, setPreview] = useState(false);
    const [del, setDel] = useState(false);
    console.log(preview)
    return (

        <>
            {edit && ReactDOM.createPortal(<Edit />, document.body)}
            {del && ReactDOM.createPortal(<Delete />, document.body)}
            {preview && ReactDOM.createPortal(<Preview />, document.body)}
            <h1>Voices</h1>
            <Wrapper>

                <Card>
                    <Card.Header>
                        Speak Vocall
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>New Game</Card.Title>
                        <Card.SubTitle>Amazing</Card.SubTitle>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Button><EditSVG /></Card.Button>
                        <Card.Button><DeleteCardSVG /></Card.Button>
                        <Card.Button><PreviewSVG /></Card.Button>
                        <Card.Button><EditSVG /></Card.Button>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Header>
                        Speak Vocall
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>New Game</Card.Title>
                        <Card.SubTitle>Amazing</Card.SubTitle>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Button tooltip='edit' onClick={() => setEdit(true)}><EditSVG /></Card.Button>
                        <Card.Button tooltip='delete' onClick={() => setDel(true)}><DeleteCardSVG /></Card.Button>
                        <Card.Button tooltip='preview' onClick={() => setPreview(true)}><PreviewSVG /></Card.Button>
                        {/* <Card.Button tooltip='edit'><EditSVG /></Card.Button> */}
                    </Card.Footer>
                </Card >
            </Wrapper >
        </>
    )
}




const Wrapper = styled.div`
    display:flex;
    width:100%;
    margin-top: 20px;
`


const Preview = () => {
    return (
        <Modal>
            <Modal.Inner>
                <Modal.Header>
                    <Modal.Title>Hello</Modal.Title>
                    <Modal.SubTitle>No Hello</Modal.SubTitle>
                </Modal.Header>
                <Modal.Body>
                    Fukc you
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Cancel>Cancel</Modal.Cancel>
                </Modal.Footer>
            </Modal.Inner>
        </Modal>
    )
}

const Edit = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [audioFile, setAudioFile] = useState('');
    const [audioUrl, setAudioUrl] = useState('');
    const handleSubmit = e => {

        e.preventDefault();

        const formData = new FormData();
        formData.append("file", audioFile)
        formData.append("user", 1)
        formData.append("name", name)
        formData.append("description", description)
        axiosInstance.post('voice/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        )
    }
    return (
        <Modal>
            <Modal.Inner>
                <Modal.Header>
                    <Modal.Title>Hello</Modal.Title>
                    <Modal.SubTitle>No Hello</Modal.SubTitle>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Base onSubmit={handleSubmit}>
                            <Group>
                                <Form.Label>Voicy name</Form.Label>
                                <Form.Input name='name' onChange={e => setName(e.target.value)} value={name} />
                            </Group>
                            <Group>
                                <Form.Label>Description</Form.Label>
                                <Form.TextArea name='description' onChange={e => setDescription(e.target.value)} value={description} />
                            </Group>
                            <Recorder setAudioFile={setAudioFile} audioFile={audioFile} audioUrl={audioUrl} setAudioUrl={setAudioUrl} />
                            <Group>
                                <Form.Submit type='submit'>Create</Form.Submit>
                            </Group>
                        </Form.Base>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Cancel>Cancel</Modal.Cancel>
                </Modal.Footer>
            </Modal.Inner>
        </Modal>
    )
}

const Delete = () => {
    return (
        <h1>Hello</h1>
    )
}


export default VoiceContainer;