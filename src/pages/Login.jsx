import { Form } from "../components";
import { useState, useContext } from "react";
import styled from "styled-components/macro";

import { AuthContext } from "../context/AuthContext";
import { Frame, Group, Loader, LoaderWrapper } from "../globalStyles";
import { Header } from "../components";
import * as ROUTES from '../constant/routes';
import * as STYLES from '../constant/styles';
import axiosInstance from "../lib/axios";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser, setAuthTokens } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({
        type: '',
        content: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            email,
            password,
        }

        axiosInstance
            .post('login/', payload)
            .then(res => {
                setLoading(false)
                const data = res.data;
                setAuthTokens({ access_token: data.access, refresh_token: data.refresh });
                setUser(data.user);
                axiosInstance.defaults.headers['Authorization'] =
                    'Bearer ' + data.access

            })
            .catch(err => {
                setLoading(false);
                setMessage({ type: STYLES.FORM_ERROR, content: 'Email or password incorrect!' })
            })
    }

    return (
        <>
            <Header>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME}>Vocall</Header.Logo>
                    </Header.Group>
                </Header.Frame>
            </Header>
            <Wrapper>
                <Form>
                    {loading && <LoaderWrapper>
                        <Loader />
                    </LoaderWrapper>}
                    <Form.Base onSubmit={handleSubmit}>
                        {message.content.length > 0 && <Form.Message type={message.type}>{message.content}</Form.Message>}
                        <Frame>
                            <Form.Title>Login to your account</Form.Title>
                        </Frame>
                        <Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Input type='text' placeholder='Your email..' value={email} onChange={e => setEmail(e.target.value)} />
                        </Group>
                        <Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Input type='password' placeholder='Your password..' value={password} onChange={e => setPassword(e.target.value)} />
                            <Form.Link to='#'>Forget Password ?</Form.Link>
                        </Group>
                        <Group>
                            <Form.Submit type='submit'>Login</Form.Submit>
                        </Group>
                        <Group>
                            <Form.Text>Dont have an account ?<Form.Link to={ROUTES.REGISTER}> Create an acoount</Form.Link></Form.Text>
                        </Group>
                        <Section>or</Section>

                    </Form.Base>
                </Form>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    width: 45%;
    margin: auto;
    margin-top: 50px;
`

const Section = styled.p`
    text-align: center;
    position: relative;
    margin: 20px 0;
    color: grey;

    &::before {
        content:"";
        width: 46%;
        background-color: lightgray;
        position: absolute;
        left: 0;
        top:10px;
        height: 1px;
    }

    &::after {
        content:"";
        width: 46%;
        background-color: lightgray;
        position: absolute;
        right: 0;
        top:10px;
        height: 1px;
    }
`


export default Login;