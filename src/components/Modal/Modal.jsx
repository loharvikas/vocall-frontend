import { Container, Inner, Header, Title, SubTitle, Body, Footer, Save, Cancel, Close } from './Modal.styles'

export default function Modal({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Modal.Inner = function ModalInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}

Modal.Header = function ModalHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>
}

Modal.Title = function ModalTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Modal.SubTitle = function ModalSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Modal.Body = function ModalBody({ children, ...restProps }) {
    return <Body {...restProps}>{children}</Body>
}

Modal.Close = function ModalClose({ children, ...restProps }) {
    return <Close {...restProps}>{children}</Close>
}

Modal.Footer = function ModalFooter({ children, ...restProps }) {
    return <Footer {...restProps}>{children}</Footer>
}

Modal.Save = function ModalSave({ children, ...restProps }) {
    return <Save {...restProps}>{children}</Save>
}

Modal.Cancel = function ModalCancel({ children, ...restProps }) {
    return <Cancel {...restProps}>{children}</Cancel>
}

