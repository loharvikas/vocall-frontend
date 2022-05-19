import React from "react";
import { HeaderContainer } from "../containers/";
import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';
import * as ROUTES from '../constant/routes';
import { Feature } from "../components";
import { LightButton } from "../globalStyles";

const Home = () => (
    <>
        <HeaderContainer />
        <Wrapper>
            <Section>
                <Title>Let's enable your website to <br /> talk</Title>
                <SubTitle>Use voice widgets to speak to your audience & collect voice feedback. Increase conversions and make better decisions.</SubTitle>
                <Button to={ROUTES.REGISTER}>Start now - it's free</Button>
            </Section>
        </Wrapper>
    </>
)

export default Home;


// SYTLES

const Wrapper = styled.div`
    width: 80%;
    margin: auto;
`;

const Section = styled.section`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    padding: 4rem 0;
`;

const Title = styled.h1`
    font-size: 6rem;
    font-weight: bold;
    text-align: center;
    margin-top: 3rem;
    color: var(--TEAL-400);
    line-height: 6rem;
`

const SubTitle = styled.p`
    font-size: 1rem;
    text-align: center;
    font-weight: 500;
    color:var(--GREY-600);
    width: 50%;
    margin: 0 auto;
    margin-top: 2rem;
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
    margin-top: 2rem;
    cursor: pointer;
    border: 1px solid lightcyan;
    transition: border 250ms linear;
    
    &:hover {
        border-color:var(--TEAL-500);
    }
`