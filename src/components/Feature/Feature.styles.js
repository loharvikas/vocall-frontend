import styled from "styled-components/macro";

export const Container = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

export const Frame = styled.div``;

export const Group = styled.div``;

export const Title = styled.h1`
    color: var(--TEAL-900);
    margin-bottom: 8px;
    font-size: ${({ fontSize }) => fontSize};
    color: ${({ color }) => color};
`;

export const SubTitle = styled.h4`
    color: var(--GREY-600);
    letter-spacing: 0.8px;
`;

export const Link = styled.a`
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
    transition: 250ms linear;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        filter:brightness(0.8)
    }
`;

export const Text = styled.p`
`;