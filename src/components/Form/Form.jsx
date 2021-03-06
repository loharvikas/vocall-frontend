import { Container, Base, TextArea, Title, Label, Input, Text, Submit, Link, Message } from './Form.styles';

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Form.Base = function FormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>
}

Form.Message = function FormMessage({ children, ...restProps }) {
    return <Message {...restProps}>{children}</Message>
}


Form.Title = function FormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Form.Label = function FormLabel({ children, ...restProps }) {
    return <Label {...restProps}>{children}</Label>
}

Form.Input = function FormInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>
}

Form.TextArea = function FormTextArea({ children, ...restProps }) {
    return <TextArea {...restProps}>{children}</TextArea>
}

Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Form.Link = function FormLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Form.Submit = function FormSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>
}