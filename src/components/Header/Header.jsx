import React from 'react';
import { Container, Frame, Group, Logo, LinkText, Button } from './Header.styles';

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}


Header.Logo = function HeaderLogo({ children, ...restProps }) {
    return <Logo {...restProps}>{children}</Logo>
}

Header.LinkText = function HeaderLinkText({ children, ...restProps }) {
    return <LinkText {...restProps}>{children}</LinkText>
}

Header.Button = function HeaderButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

