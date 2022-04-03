import React from 'react';
import { Container, Frame, Group, Title, SubTitle, Text, Link } from './Feature.styles';

export default function Feature({ children, ...restProps }) {
    return <Container {...restProps} >{children}</Container>
}

Feature.Frame = function FeatureFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Feature.Group = function FeatureGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Feature.Text = function FeatureText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Feature.Link = function FeatureLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

// Feature.Button = function FeatureButton({ children, ...restProps}) {
//     return <Button {...restProps}>{children}</Button>
// }