import styled from "styled-components/macro";
import { PrimaryButton } from "../../globalStyles";

export const Container = styled.div`
    width: 100%;
    display: flex;
    border-bottom: var(--BORDER-SECONDARY);
    background-color: var(--WHITE-999);
`;

export const Frame = styled.div`
    max-width: 1300px;
    width: 100%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
`;

export const Logo = styled.h1`
    color: var(--TEAL-500);
    margin-right: 30px;
`;

export const LinkText = styled.a`
    margin-right: 30px;
    color: var(--GREY-600);
    transition: color 300ms linear;
    position: relative;
    
    &:hover {
        color: var(--TEAL-500);

        &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -3px;
        width: 100%;
        height: 1px;
        background-color: var(--TEAL-500);
        animation: slide 300ms linear;

        @keyframes slide {
            0% {
                width: 0%;
            }

            50% {
                width: 50%;
            }

            100% {
                width: 100%
            }
        }
    }
    }
`;

export const Button = styled(PrimaryButton)`
    margin-right: 20px;

    &:last-child {
        margin-right: 0;
    }
`