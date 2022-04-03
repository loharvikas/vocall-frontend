import { Card } from "../../components";
import styled from "styled-components";
import { EditSVG, DeleteCardSVG, PreviewSVG } from "../../assets/icons";

const VoiceContainer = () => (
    <>
        <div style={{ marginLeft: "22px" }}>

            <h1>Voices</h1>
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
        </div>
    </>
)


export default VoiceContainer;