import styled from "styled-components/macro";
import { NavLink as ReactRouterNavLink } from 'react-router-dom';

export const Container = styled.div`
    height: 100vh;
    width: 90px;
    background-color: var(--WHITE-999);
    position: fixed;
    margin-right:90px;
    border-right: 1px solid var(--GREY-200);
    text-align: center;
`;

export const Frame = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 10px;
`;

export const Group = styled.div`
    display: flex;
    /* height: 50%; */
    flex-direction: column;
    /* justify-content: space-between; */
`;

export const Header = styled.header`
    font-size: 18px;
    color: var(--TEAL-500);
    font-weight: bold;
    /* text-transform: uppercase; */
`;

export const Item = styled(ReactRouterNavLink)`
    margin-bottom: 2rem;
    position: relative;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    
    svg {
        fill: var(--GREY-200);
        width: 30px;
        height: 30px;
    }

    &:last-of-type {
        margin-bottom: 0;
    }

    &:hover {
        &::after {
            content:'';
            position: absolute;
            right: -11px;
            height: 100%;
            width: 3px;
            border-bottom-left-radius: 5px;
            border-top-left-radius: 5px;
            background-color: var(--TEAL-500);
            transition: all 2000ms linear;
        }

        svg {
            fill: var(--TEAL-500);
        }
    }

    &.active {
        &::after {
            content:'';
            position: absolute;
            right: -11px;
            height: 100%;
            width: 3px;
            border-bottom-left-radius: 5px;
            border-top-left-radius: 5px;
            background-color: var(--TEAL-500);
            transition: all 2000ms linear;
        }

        svg {
            fill: var(--TEAL-500);
        }

        
    }
`;

export const Button = styled.button``

export const Footer = styled.footer``