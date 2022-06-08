import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { AudioContainer } from '../containers';
import axiosInstance from '../lib/axios';

const Iframe = () => {
    const { voiceId } = useParams();
    const [audioUrl, setAudioUrl] = useState('');
    console.log(voiceId)
    useEffect(() => {
        axiosInstance.get(`voice/${voiceId}/`)
            .then(res => {
                setAudioUrl(res?.data?.file);
            })
            .catch(err => console.error(err))
    }, [voiceId])
    return (
        <AudioContainer audioUrl={audioUrl} />
    )
}

export default Iframe;