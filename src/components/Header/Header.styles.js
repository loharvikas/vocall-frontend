import styled from "styled-components/macro";
import { NavLink as ReactRouterNavLink } from "react-router-dom";

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

export const Logo = styled(ReactRouterNavLink)`
    font-size: 24px;
    color: var(--TEAL-500);
    margin-right: 30px;
    font-weight: bold;
`;

export const LinkText = styled(ReactRouterNavLink)`
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

export const Button = styled(ReactRouterNavLink)`
    font-weight: 600;
    border: none;
    border-radius: 4px;
    text-align: center;
    padding: 10px 26px;
    cursor: pointer;
    margin-right: 20px;
    font-size: 14px;

    background-color: var(--TEAL-500);
    color: var(--BLACK-999);

    &:last-child {
        margin-right: 0;
    }
`