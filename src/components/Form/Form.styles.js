import styled from "styled-components/macro";
import { PrimaryButton } from '../../globalStyles';
import { Link as ReactRouterLink } from 'react-router-dom';
import * as STYLES from '../../constant/styles';

export const Container = styled.div`
    /* position: relative; */
    /* background-color: pink; */
    max-width: 900px;
    width: 70%;
    margin: 20px auto;
    background-color: var(--WHITE-800);
    padding: 30px;
    border:var(--BORDER-SECONDARY);
    border-radius: 5px;
    position: relative;
`;

export const Base = styled.form`
`;

export const Message = styled.div`
    padding: 10px;
    border-radius: 3px;
    font-weight: 500;
    font-size: 14px;
    border: 1px solid lightgray;
    margin: 10px 0;

    
    ${({ type }) => type === STYLES.FORM_SUCCESS && `
        background-color: rgba(34,187,51, 0.3);
        color: green;
        border-color: green;
    `}

    ${({ type }) => type === STYLES.FORM_ERROR && `
        background-color: var(--RED-200);
        color: red;
        border-color: red;
    `}
`

export const Title = styled.h1`
    text-align: center;
    color: var(--TEAL-900);
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.7rem 0.9rem;
    margin-bottom: 20px;
    font-size: 16px;
    color: var(--BLUE-900);
    border: var(--BORDER-SECONDARY);
    border-radius: 3px;
    transition: border 250ms linear;
    outline: none;

    &:focus {
        border-color: var(--TEAL-600);
    }
`;

export const TextArea = styled.textarea`
    margin-bottom: 20px;
    resize: none;
    height: 200px;
    outline: none;
    padding: 0.7rem 0.9rem;
    font-family: sans-serif;
    font-size: 16px;
    border:var(--BORDER-SECONDARY);
    border-radius: 3px;
    &:focus {
        border-color: var(--TEAL-600);
    }
`;

export const Label = styled.label`
    margin-bottom: 10px;
    font-weight: bold;
`;

export const Link = styled(ReactRouterLink)`
    color: var(--BLUE-500);
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 20px;
`

export const Text = styled.p`
    font-weight: 500;
    font-size: 14px;
    color:var(--GREY-500);
    margin-top: 20px;
    text-align: center;
`;

export const Submit = styled(PrimaryButton)`
    color:var(--WHITE-999);
    width: 100%;
    transition: all 200ms linear;

    &:hover {
        filter:brightness(0.8)
    }
`;