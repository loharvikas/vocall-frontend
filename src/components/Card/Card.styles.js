import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: var(--TEAL-500);
    max-width: 300px;
    height: 200px;
    position: relative;
    cursor:pointer;
    color:var(--WHITE-999);
    border:2px solid var(--TEAL-900);
    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        -webkit-box-shadow: 1px 0px 97px -57px rgba(50,252,118,1);
-moz-box-shadow: 1px 0px 97px -57px rgba(50,252,118,1);
box-shadow: 1px 0px 97px -57px rgba(50,252,118,1);
    }

`

export const Header = styled.div`
    height: 40px;
    padding: 20px;
`

export const Body = styled.div`
    padding: 10px 20px;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: row-reverse;
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
    min-width:50px;
    cursor: pointer;
    border: 1px solid lightgrey;
    background-color: transparent;
    margin-left:-1px;
    position: relative;
    &:first-of-type {
        margin-left:0px;
    }
    svg {
        fill: black;
        stroke: 1;
    }

    &:hover {

        &::before{
            content:${({ tooltip }) => tooltip === 'edit' ? 'edit' : 'no name'};
            position: absolute;
            left:-5px;
            right:-10px;
            top: -40px;
            background: rgba(0,0,0,0.5);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 3px;
            height: 30px;
            width: 120%;
        }
    }
`

export const Text = styled.p``

export const Title = styled.h2`
    margin-bottom: 5px;
`

export const SubTitle = styled.h4``

