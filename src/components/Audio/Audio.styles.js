import styled from "styled-components/macro";

export const Container = styled.div`
    width: 140px;

    padding: 10px;
    border-radius: 12px;
    box-shadow: 5px 5px 20px 10px rgba(0,0,0,0.1);
    background-color: var(--TEAL-200);
`;

export const Frame = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid black;
`;

export const Player = styled.audio``;

export const Button = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
`;

