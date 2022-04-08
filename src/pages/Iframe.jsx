import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { AudioContainer } from '../containers';
import axiosInstance from '../lib/axios';

const Iframe = () => {
    const { voiceId } = useParams();
    const [audioFile, setAudioFile] = useState('');

    useEffect(() => {
        axiosInstance.get(`voice/${voiceId}/`)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }, [])

    return (
        <AudioContainer audioFile={audioFile} />
    )
}

export default Iframe;