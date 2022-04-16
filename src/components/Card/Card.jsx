import React from 'react';
import { Container, Header, Body, Text, Title, SubTitle, Footer, Button } from './Card.styles';

export default function Card({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Card.Header = function CardHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
}

Card.Body = function CardBody({ children, ...restProps }) {
    return <Body {...restProps}>{children}</Body>
}

Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Footer = function CardFooter({ children, ...restProps }) {
    return <Footer {...restProps}>{children}</Footer>
}

Card.Button = function CardButton({ children, ...restProps }) {
    console.log(restProps)
    return (
        <Button {...restProps}>{children}</Button>
    )
}