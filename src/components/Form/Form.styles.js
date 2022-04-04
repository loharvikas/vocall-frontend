import styled from "styled-components/macro";
import { PrimaryButton } from '../../globalStyles';

export const Container = styled.div`
    background-color: var(--WHITE-800);
    padding: 30px;
    border:var(--BORDER-SECONDARY);
    border-radius: 5px;

`;

export const Base = styled.form``;

export const Wrapper = styled.div``;

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

export const Text = styled.p``;

export const Submit = styled(PrimaryButton)`
    color:var(--WHITE-999);
    width: 30%;
    transition: all 200ms linear;

    &:hover {
        filter:brightness(0.8)
    }
`;