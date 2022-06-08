import React from "react";
import { AudioContainer, HeaderContainer } from "../containers/";
import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';
import * as ROUTES from '../constant/routes';

const Home = () => (
    <>
        <HeaderContainer />
        <Wrapper>
            <Section>
                <Title>Let's enable your website to talk</Title>
                <SubTitle>Use voice widgets to speak to your audience & collect voice feedback. Increase conversions and make better decisions.</SubTitle>
                <br />
                <AudioContainer />
                <Button to={ROUTES.REGISTER}>Start now - it's free</Button>
            </Section>
        </Wrapper>
    </>
)

export default Home;


// SYTLES

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Section = styled.section`
    width: 70%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    padding: 4rem 0;
    align-items: center;
`;

const Title = styled.h1`
font-size: 6rem;
    letter-spacing: 0.3ch;
    text-align: center;
   text-transform: uppercase;
    background-image: linear-gradient(
        -225deg,
        #3ad613 0%,
        #024416 40%,
        #ff1361 67%,
        #fff800 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 150% auto;
    color: #fff;
    background-clip: text;
    /* text-fill-color: transparent; */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;

    @keyframes textclip {
    to {
        background-position: 300% center;
    }
}
`

const SubTitle = styled.p`
    font-size: 1rem;
    text-align: center;
    font-weight: 500;
    color:var(--GREY-600);
    width: 50%;
    margin: 0 auto;
    margin: 2rem 0;
`

const Button = styled(ReactRouterLink)`
    width: 20%;
    margin: 0 auto;
    padding: 1rem 0.5rem;
    background-color: lightcyan;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;
    color: var(--TEAL-500);
    text-align: center;
    margin-top: 1rem;
    cursor: pointer;
    border: 1px solid lightcyan;
    transition: border 250ms linear;
    &:hover {
        border-color:var(--TEAL-500);
    }
`