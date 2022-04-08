import { Container, Player, Image, Button, Frame } from './Audio.styles';

export default function Audio({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Audio.Player = function AudioPlayer({ children, ...restProps }) {
    return <Player {...restProps}>{children}</Player>
}

Audio.Image = function AudioImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>
}

Audio.Button = function AudioButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

Audio.Frame = function AudioFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}


