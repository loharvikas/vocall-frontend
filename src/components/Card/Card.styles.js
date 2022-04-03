import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: var(--TEAL-500);
    max-width: 400px;
    height: 200px;
    position: relative;
`

export const Header = styled.div`
    height: 40px;
    padding: 10px;
`

export const Body = styled.div`
    padding: 10px 20px;
`

export const Footer = styled.div`
    display: flex;
    position: absolute;
    bottom:0;
    left:0;
    right:0;
    height:40px;
    background-color: var(--GREY-200);
`

export const Button = styled.button`
    border: none;
    height:100%;
    min-width:40px;
    cursor: pointer;
    border: 1px solid lightgrey;
    background-color: transparent;
    svg {
        fill: black;
        stroke: 1;
    }
`

export const Text = styled.p``

export const Title = styled.h2`
    margin-bottom: 5px;
`

export const SubTitle = styled.h4``

