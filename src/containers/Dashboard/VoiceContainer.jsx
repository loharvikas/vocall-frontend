import { Card } from "../../components";
import styled from "styled-components";
import { EditSVG, DeleteCardSVG, PreviewSVG } from "../../assets/icons";

const VoiceContainer = () => (
    <>
        <h1>Voices</h1>
        <Wrapper>

            <Card>
                <Card.Header>
                    Speak Vocall
                </Card.Header>
                <Card.Body>
                    <Card.Title>New Game</Card.Title>
                    <Card.SubTitle>Amazing</Card.SubTitle>
                </Card.Body>
                <Card.Footer>
                    <Card.Button><EditSVG /></Card.Button>
                    <Card.Button><DeleteCardSVG /></Card.Button>
                    <Card.Button><PreviewSVG /></Card.Button>
                    <Card.Button><EditSVG /></Card.Button>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Header>
                    Speak Vocall
                </Card.Header>
                <Card.Body>
                    <Card.Title>New Game</Card.Title>
                    <Card.SubTitle>Amazing</Card.SubTitle>
                </Card.Body>
                <Card.Footer>
                    <Card.Button><EditSVG /></Card.Button>
                    <Card.Button><DeleteCardSVG /></Card.Button>
                    <Card.Button><PreviewSVG /></Card.Button>
                    <Card.Button><EditSVG /></Card.Button>
                </Card.Footer>
            </Card>
        </Wrapper>
    </>
)


const Wrapper = styled.div`
    display:flex;
    width:100%;
    border:1px solid green;
`

export default VoiceContainer;