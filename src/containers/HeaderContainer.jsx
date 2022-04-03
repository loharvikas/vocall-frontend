import React from 'react';
import { Header } from '../components';

const HeaderContainer = () => (
    <Header>
        <Header.Frame>
            <Header.Group>
                <Header.Logo >Vocall</Header.Logo>
                <Header.LinkText href='#'>Home</Header.LinkText>
                <Header.LinkText href='#'>About Us</Header.LinkText>
                <Header.LinkText href='#'>Contact</Header.LinkText>
            </Header.Group>
            <Header.Group>
                <Header.LinkText href='#'>Login</Header.LinkText>
                <Header.Button href='#'>Get started for free</Header.Button>
            </Header.Group>
        </Header.Frame>
    </Header>
)

export default HeaderContainer;