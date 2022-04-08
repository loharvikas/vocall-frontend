import { useState, useEffect } from "react";
import { recordAudio } from "../../utils";
import styled from "styled-components";
import { RecordSVG, StopSVG, PauseSVG, ResumeSVG } from "../../assets/icons";
import AudioContainer from './AudioContainer';

const Recorder = ({ audioFile, setAudioFile, audioUrl, setAudioUrl }) => {
    const [recording, setRecording] = useState(false);
    const [paused, setPaused] = useState(false);
    const [stop, setStop] = useState(false);
    const [recorder, setRecorder] = useState(null);

    const initilizeAudio = async () => {
        const r = await recordAudio();
        setRecorder(r);
    }

    useEffect(() => {
        initilizeAudio();
    }
        , [])

    const playAudio = async (mode, e) => {
        e.preventDefault();
        switch (mode) {
            case 'Start':
                recorder.start();
                setRecording(true);
                break
            case 'Pause':
                if (paused === false) {
                    recorder.pause();
                } else {
                    recorder.resume();
                }
                setPaused(prevState => !prevState);
                break;
            case 'Stop':
                setRecording(false);
                setPaused(false);
                setStop(true);
                const audio = await recorder.stop();
                setAudioFile(audio.mp3fromblob);
                setAudioUrl(audio.audioUrl);
                const stream = recorder.stream;
                stream.getTracks().forEach(track => track.stop());
                break;
        }
    }
    return (
        <Wrapper>
            {!recording && !stop &&

                <RecordButton onClick={e => playAudio('Start', e)}><RecordSVG /></RecordButton>
            }
            {recording &&
                <>
                    <Frame>
                        <StopButton onClick={e => playAudio('Stop', e)} ><StopSVG /></StopButton>
                    </Frame>

                    <PauseButton onClick={e => playAudio('Pause', e)}>
                        {paused ? <ResumeSVG /> : <PauseSVG />}
                    </PauseButton>
                </>
            }
            {
                stop &&
                <>
                    <AudioContainer audioUrl={audioUrl} />
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
    margin-bottom: 30px;
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