import { useState } from "react";
import { recordAudio } from "../../utils";
import styled from "styled-components";
import { RecordSVG, StopSVG, PauseSVG } from "../../assets/icons";

const playAudio = async () => {
    const recorder = await recordAudio();
    recorder.start();

    setTimeout(async () => {
        const audio = await recorder.stop();
        audio.play();
    }, 3000);
}

const Recorder = () => {
    const [recording, setRecording] = useState(false);
    const [paused, setPaused] = useState(false);
    const [stop, setStop] = useState(false);

    return (
        <Wrapper>
            {!recording && !stop &&

                <RecordButton onClick={() => setRecording(true)}><RecordSVG /></RecordButton>
            }
            {recording &&
                <>
                    <Frame>
                        <StopButton><StopSVG /></StopButton>
                    </Frame>
                    <PauseButton><PauseSVG /></PauseButton>
                </>
            }
        </Wrapper>
    )
}


const Wrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
    padding: 30px;
    border: var(--BORDER-SECONDARY);
    background-color: var(--GREY-300);
    border-radius: 5px;
    width: 30%;
`;

const Frame = styled.div``;

const Button = styled.button`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

const RecordButton = styled(Button)`
    background-color: var(--RED-500);
`;

const StopButton = styled(Button)`
    background-color: var(--RED-500);
`;

const PauseButton = styled(Button)`
    background-color: var(--GREY-500);
    margin-left:20px;
`;


export default Recorder;