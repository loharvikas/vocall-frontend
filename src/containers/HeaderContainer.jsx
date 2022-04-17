import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constant/routes';

const HeaderContainer = () => (
    <Header>
        <Header.Frame>
            <Header.Group>
                <Header.Logo >Vocall</Header.Logo>
                <Header.LinkText to='#'>Home</Header.LinkText>
                <Header.LinkText to='#'>About Us</Header.LinkText>
                <Header.LinkText to='#'>Contact</Header.LinkText>
            </Header.Group>
            <Header.Group>
                <Header.LinkText to={ROUTES.LOGIN}>Login</Header.LinkText>
                <Header.Button to={ROUTES.REGISTER}>Get started for free</Header.Button>
            </Header.Group>
        </Header.Frame>
    </Header>
)

export default HeaderContainer;