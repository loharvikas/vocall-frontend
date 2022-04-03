import React from 'react';
import { Container, Frame, Group, Header, Item, Button, Footer } from './Sidebar.styles';

export default function Sidebar({ children, ...restProps }) {
    return <Container {...restProps} >{children}</Container>
}

Sidebar.Frame = function SidebarFrame({ children, ...restProps }) {
    return <Frame {...restProps} >{children}</Frame>
}

Sidebar.Group = function SidebarGroup({ children, ...restProps }) {
    return <Group {...restProps} >{children}</Group>
}

Sidebar.Header = function SidebarHeader({ children, ...restProps }) {
    return <Header {...restProps} >{children}</Header>
}

Sidebar.Item = function SidebarItem({ children, ...restProps }) {
    return <Item {...restProps} >{children}</Item>
}

Sidebar.Button = function SidebarButton({ children, ...restProps }) {
    return <Button {...restProps} >{children}</Button>
}

Sidebar.Footer = function SidebarFooter({ children, ...restProps }) {
    return <Footer {...restProps} >{children}</Footer>
}