import { useState, useEffect } from "react";
import { recordAudio } from "../../utils";
import styled from "styled-components";
import { RecordSVG, StopSVG } from "../../assets/icons";
import AudioContainer from './AudioContainer';
import * as STYLES from '../../constant/styles';

const Recorder = ({ audioFile, setAudioFile, audioUrl, setAudioUrl, setMessage }) => {
    const [recording, setRecording] = useState(false);
    const [paused, setPaused] = useState(false);
    const [stop, setStop] = useState(false);
    const [recorder, setRecorder] = useState(null);

    const initilizeAudio = async () => {
        const r = await recordAudio();
        console.log(r)
        setRecorder(r);
    }

    useEffect(() => {
        initilizeAudio();
    }
        , [])

    const playAudio = async (mode, e) => {
        if (recorder === undefined || recorder === null) {
            setMessage({ type: STYLES.FORM_ERROR, content: "Recording device not accessible." })
            return
        }
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
                console.log('WORLD', audio)
                setAudioFile(audio.mp3fromblob);
                setAudioUrl(audio.audioUrl);
                const stream = recorder.stream;
                stream.getTracks().forEach(track => track.stop());
                break;
            default:

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
                        <StopButton type='click' onClick={e => playAudio('Stop', e)} ><StopSVG /></StopButton>
                    </Frame>
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



const RecordButton = styled.a`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--RED-500);
`;

const StopButton = styled.a`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--RED-500);
`;



export default Recorder;