import { Form, Modal } from "../components";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Frame, Group } from "../globalStyles";
import styled from "styled-components/macro";
import { Routes } from "react-router-dom";
import * as ROUTES from '../constant/routes';
import axiosInstance from "../lib/axios";


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser, setAuthTokens } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            full_name: name,
            email,
            password,
        }

        axiosInstance
            .post('register/', payload)
            .then(res => {
                const data = res.data;
                setAuthTokens({ access_token: data.access, refresh_token: data.refresh });
                setUser(data.user);
                axiosInstance.defaults.headers['Authorization'] =
                    'Bearer ' + data.access

            })
            .catch(err => console.error(err))
    }

    return (
        <Wrapper>

            <Form>
                <Form.Base onSubmit={handleSubmit}>
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
                    <Section>or</Section>

                </Form.Base>
            </Form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 30%;
    margin: auto;
    margin-top: 50px;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 30px;
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


export default Register;