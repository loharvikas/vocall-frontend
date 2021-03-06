import { useState, useRef } from "react";

import { Audio, WaveAnimation } from "../../components";
import { PauseSVG, ResumeSVG } from "../../assets/icons";


const AudioContainer = ({ audioUrl }) => {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef();


    const handleClick = () => {
        const audio = audioRef.current;
        if (playing === false) {
            audio.play();
        } else {
            audio.pause();
        }
        setPlaying(prevState => !prevState)
    }

    return (
        <Audio>
            <audio src={audioUrl} loop ref={audioRef} />
            <Audio.Frame>
                <Audio.Image />
                {playing && <WaveAnimation />}
                <Audio.Button type='button' onClick={handleClick}>
                    {playing ? <PauseSVG /> : <ResumeSVG />}
                </Audio.Button>
            </Audio.Frame>
        </Audio>
    )
}

export default AudioContainer