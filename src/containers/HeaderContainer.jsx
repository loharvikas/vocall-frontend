import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constant/routes';

const HeaderContainer = () => (
    <Header>
        <Header.Frame>
            <Header.Group>
                <Header.Logo to={ROUTES.HOME}>Vocall</Header.Logo>
            </Header.Group>
            <Header.Group>
                <Header.LinkText to={ROUTES.LOGIN}>Login</Header.LinkText>
                <Header.Button to={ROUTES.REGISTER}>Get started for free</Header.Button>
            </Header.Group>
        </Header.Frame>
    </Header>
)

export default HeaderContainer;