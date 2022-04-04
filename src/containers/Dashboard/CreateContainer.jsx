import { Form } from "../../components";
import { Frame, Group } from "../../globalStyles";
import styled from "styled-components";
import Recorder from "./RecordContainer";

export default function CreateContainer() {

    return (
        <Wrapper>
            <Form>
                <Form.Base>
                    <Frame>
                        <Form.Title>Create your voicall</Form.Title>
                    </Frame>
                    <Group>
                        <Form.Label>Voicy name</Form.Label>
                        <Form.Input />
                    </Group>
                    <Group>
                        <Form.Label>Description</Form.Label>
                        <Form.TextArea />
                    </Group>
                    <Group>
                        <Form.Submit>Create</Form.Submit>
                    </Group>
                </Form.Base>

                <Container>
                    <Button></Button>
                </Container>

                <Recorder />
            </Form>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    max-width: 900px;
    width: 70%;
    margin: 20px auto;
`

const Container = styled.div`
    
`

const Button = styled.button`
    
`