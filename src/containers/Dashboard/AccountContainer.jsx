import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../context/AuthContext';
import { Form } from '../../components';
import axiosInstance from '../../lib/axios';
import * as STYLES from '../../constant/styles';
import { Loader, LoaderWrapper } from '../../globalStyles';

const InformationForm = ({ user, setUser }) => {
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.full_name);
    const [message, setMessage] = useState({ type: '', content: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        axiosInstance
            .put(`user/update/${user.id}/`, { email: email, full_name: name })
            .then(res => {
                setUser(res.data);
                setMessage({ type: STYLES.FORM_SUCCESS, content: 'Your information is successfully updated!' });
                setLoading(false);

            })
            .catch(err => {
                setMessage({ type: STYLES.FORM_ERROR, content: JSON.stringify(err) });
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
                <Form.Title type='subForm'>Information</Form.Title>
                {message.content.length > 0 && <Form.Message type={message.type} >
                    {message.content}
                </Form.Message>}
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
        </Form>
    )
}

const PasswordForm = ({ user }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState({ type: '', content: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            old_password: currentPassword,
            new_password: newPassword
        }

        axiosInstance
            .put('user/password-change/', payload)
            .then(res => {
                setMessage({ type: STYLES.FORM_SUCCESS, content: 'Your password is successfully changed!' });
                setNewPassword('');
                setCurrentPassword('');
                setLoading(false)
            })
            .catch(err => {
                setMessage({ type: STYLES.FORM_ERROR, content: "Invalid inputs" });
                setNewPassword('');
                setCurrentPassword('');
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
                <Form.Title type='subForm'>Password</Form.Title>
                {message.content.length > 0 && <Form.Message type={message.type} >
                    {message.content}
                </Form.Message>}
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
        </Form>
    )
}


const AccountContainer = () => {
    const { user, setUser } = useContext(AuthContext);

    return (
        <>
            <InformationForm user={user} setUser={setUser} />
            <PasswordForm user={user} />
        </>
    )
}

// const Wrapper = styled.div`
//     margin-top: 30px;
//     background-color: var(--WHITE-999);
//     padding: 20px;
//     border:1px solid lightgray;
//     border-radius: 7px;
//     position: relative;
//     &:last-child {
//         margin-bottom: 30px;
//     }
// `

// const Container = styled.div`
//     margin: 30px auto;
//     width: 100%;
// `

const Frame = styled.div`
    display:flex;
    justify-content: space-between;
`

const Group = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom: 20px;
`

export default AccountContainer;