import styled from "styled-components/macro";
import { SuccessButton, LightButton } from "../../globalStyles";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
`;

export const Header = styled.header`
    max-height: 60px;
    border-bottom: 1px solid lightgray;
    padding: 4px 0px;
`;

export const Title = styled.h3`
    max-height: 50px;
`;

export const SubTitle = styled.small`
    max-height: 50px;
`;

export const Inner = styled.div`
    margin: 0 auto;
    margin-top:80px;
    padding: 8px 15px;
    background: #fff;
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: scroll;
    max-height: 600px;
    min-width: 300px;
    width: 50%;
    border-radius: 3px;
`;

export const Body = styled.main`
max-height: 600px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`;

export const Footer = styled.footer`
    max-height: 80px;
    display: flex;
    flex-direction: row-reverse;
    border-top: 1px solid lightgray;
    padding: 4px 0px;
`;

export const Close = styled.button`
position: absolute;
  top:12px;
  right: 0px;
  width: 22px;
  height: 22px;
  opacity: 0.5;
  background: transparent;
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: ' ';
    height: 22px;
    width: 3px;
    background-color: var(--PRIMARY-500);
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  } 
`;

export const Cancel = styled(LightButton)`
padding: 0.6rem 0.7rem;
font-weight: 500;
`;

export const Save = styled(SuccessButton)`
padding: 0.6rem 0.7rem;
font-weight: 500;
`