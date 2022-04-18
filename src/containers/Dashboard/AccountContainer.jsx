import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../context/AuthContext';
import { Form } from '../../components';
import axiosInstance from '../../lib/axios';

const Wrapper = styled.div`
    margin-top: 30px;
    background-color: var(--WHITE-999);
    padding: 20px;
    border:1px solid lightgray;
    border-radius: 7px;
    &:last-child {
        margin-bottom: 30px;
    }
`

const Container = styled.div`
    margin: 30px auto;
    width: 60%;
    /* padding: 20px;
    width: 60%;
    border: 1px solid lightgray;
    background-color:var(--WHITE-999);
    border-radius: 5px; */
`

const Frame = styled.div`
    display:flex;
    justify-content: space-between;
`

const Group = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom: 20px;
`

const InformationForm = ({ user, setUser }) => {
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.full_name);

    const handleSubmit = (event) => {
        event.preventDefault();

        axiosInstance
            .put(`users/update/${user.id}/`, { email: email, full_name: name })
            .then(res => {
                console.log(res)
                setUser(res.data);
            })
            .catch(err => {
                console.error(err)
            })

    }

    return (
        <Form.Wrapper type='subForm'>
            <Form.Base onSubmit={handleSubmit}>
                <Form.Title type='subForm'>Information</Form.Title>
                <Group>
                    <Form.Label htmlFor='email' type='subForm'>
                        Email
                    </Form.Label>
                    <Form.Input
                        id='email'
                        type='text'
                        formType='subForm'
                        placeholder='Enter your email...'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </Group>
                <Group>
                    <Form.Label htmlFor='name' type='subForm'>
                        Full name
                    </Form.Label>
                    <Form.Input
                        id='name'
                        type='text'
                        formType='subForm'
                        placeholder='Enter your name...'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </Group>
                <Frame>
                    <div>
                        <Form.Submit type='submit' formType='subForm'>
                            Save changes
                        </Form.Submit>
                    </div>
                </Frame>
            </Form.Base>
        </Form.Wrapper>
    )
}

const PasswordForm = ({ user }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const payload = {
            old_password: currentPassword,
            new_password: newPassword
        }

        axiosInstance
            .put('users/password-change/', payload)
            .then(res => {
                setNewPassword('');
                setCurrentPassword('');
            })
            .catch(err => {
                setNewPassword('');
                setCurrentPassword('');
            })
    }

    return (
        <Form.Wrapper type='subForm'>
            <Form.Base onSubmit={handleSubmit}>
                <Form.Title type='subForm'>Password</Form.Title>
                <Group>
                    <Form.Label htmlFor='current_password' type='subForm'>
                        Current password
                    </Form.Label>
                    <Form.Input
                        id='current_password'
                        type='password'
                        formType='subForm'
                        placeholder='Enter your current password...'
                        value={currentPassword}
                        onChange={({ target }) => setCurrentPassword(target.value)}
                    />
                </Group>
                <Group>
                    <Form.Label htlmFor='new_password' type='subForm'>
                        New password
                    </Form.Label>
                    <Form.Input
                        id='new_password'
                        type='password'
                        formType='subForm'
                        placeholder='Enter your new password...'
                        value={newPassword}
                        onChange={({ target }) => setNewPassword(target.value)}
                    />
                </Group>
                <Frame>
                    <div>
                        <Form.Submit type='submit' formType='subForm'>
                            Save changes
                        </Form.Submit>
                    </div>
                </Frame>
            </Form.Base>
        </Form.Wrapper>
    )
}


const AccountContainer = () => {
    const { user, setUser } = useContext(AuthContext);

    return (
        <Container>

            <Wrapper>
                <InformationForm user={user} setUser={setUser} />
            </Wrapper>
            <Wrapper>
                <PasswordForm user={user} />
            </Wrapper>
        </Container>
    )
}

export default AccountContainer;