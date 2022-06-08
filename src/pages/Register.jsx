import { Form } from "../components";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Frame, Group, Loader, LoaderWrapper } from "../globalStyles";
import { Header } from "../components";
import styled from "styled-components/macro";
import * as ROUTES from '../constant/routes';
import * as STYLES from '../constant/styles';
import axiosInstance from "../lib/axios";



const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({
        type: '',
        content: ''
    })
    const { setUser, setAuthTokens } = useContext(AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            full_name: name,
            email,
            password,
        }

        axiosInstance
            .post('register/', payload)
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
                setMessage({
                    type: STYLES.FORM_ERROR,
                    content: 'User with this email already exists!'
                })
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
                            <Form.Title>Register</Form.Title>
                        </Frame>
                        <Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Input type='text' placeholder='Your name..' value={name}
                                onChange={e => setName(e.target.value)} />
                        </Group>
                        <Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Input type='text' placeholder='Your email..' value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </Group>
                        <Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Input type='password' placeholder='Your password..'
                                value={password}
                                onChange={e => setPassword(e.target.value)} />
                            <Form.Link to='#'>Forget Password ?</Form.Link>
                        </Group>
                        <Group>
                            <Form.Submit type='submit'>Sign up</Form.Submit>
                        </Group>
                        <Group>
                            <Form.Text>Already have an account ? <Form.Link to={ROUTES.LOGIN}>Sign In</Form.Link></Form.Text>
                        </Group>

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




export default Register;