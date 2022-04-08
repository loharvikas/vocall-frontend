import { useState, useRef } from "react";

import { Audio } from "../../components";
import { PauseSVG, ResumeSVG } from "../../assets/icons";


const AudioContainer = ({ audioUrl }) => {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef();


    const handleClick = () => {
        const audio = audioRef.current;
        console.log(audio)
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
            {/* <Audio.Player src={audioUrl} loop ref={audioRef}></Audio.Player> */}
            <Audio.Frame>
                <Audio.Image />
                <Audio.Button onClick={handleClick}>
                    {playing ? <PauseSVG /> : <ResumeSVG />}
                </Audio.Button>
            </Audio.Frame>
        </Audio>
    )
}

export default AudioContainer