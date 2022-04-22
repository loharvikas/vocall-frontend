import { useState } from 'react';
import { Form } from "../../components";
import { Frame, Group, Loader, LoaderWrapper } from "../../globalStyles";
import styled from "styled-components";
import Recorder from "./RecordContainer";
import axiosInstance from '../../lib/axios';
import * as STYLES from '../../constant/styles';


export default function CreateContainer({ user }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [audioFile, setAudioFile] = useState('');
    const [audioUrl, setAudioUrl] = useState('');
    const [message, setMessage] = useState({
        type: '',
        content: ''
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = e => {

        e.preventDefault();
        setLoading(true);

        const formData = new FormData();

        formData.append("file", audioFile);
        formData.append("user", user.id);
        formData.append("name", name);
        formData.append("description", description)
        axiosInstance
            .post('voice/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                setMessage({
                    type: STYLES.FORM_SUCCESS,
                    content: 'Your voicall is created successfully!'
                });
                setName('');
                setDescription('');
                setAudioFile('');
                setAudioUrl('');
                setLoading(false);
            })
            .catch(err => {
                setMessage({
                    type: STYLES.FORM_ERROR,
                    content: 'Invalid inputs!'
                });
                setLoading(false);
            })
    }

    return (
        <Form>
            {loading &&
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            }
            <Form.Base onSubmit={handleSubmit}>
                {message.content.length > 0 && <Form.Message type={message.type}>{message.content}</Form.Message>}
                <Frame>
                    <Form.Title>Create your vocall</Form.Title>
                </Frame>
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
                    <div style={{ width: '30%' }}>

                        <Form.Submit type='submit'>Create</Form.Submit>
                    </div>
                </Group>
            </Form.Base>

        </Form>
    )
}


const FormWrapper = styled.div`
max-width: 900px;
    width: 70%;
    margin: 20px auto;
    background-color: var(--WHITE-800);
    padding: 30px;
    border:var(--BORDER-SECONDARY);
    border-radius: 5px;
`