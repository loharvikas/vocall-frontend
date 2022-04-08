import { useState } from 'react';
import { Form } from "../../components";
import { Frame, Group } from "../../globalStyles";
import styled from "styled-components";
import Recorder from "./RecordContainer";
import axiosInstance from '../../lib/axios';


export default function CreateContainer() {
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
        <Wrapper>
            <Form>
                <Form.Base onSubmit={handleSubmit}>
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
                        <Form.Submit type='submit'>Create</Form.Submit>
                    </Group>
                </Form.Base>

            </Form>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    max-width: 900px;
    width: 70%;
    margin: 20px auto;
`
