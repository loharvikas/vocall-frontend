import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { AudioContainer } from '../containers';
import axiosInstance from '../lib/axios';

const Iframe = () => {
    const { voiceId } = useParams();
    const [audioUrl, setAudioUrl] = useState('');

    useEffect(() => {
        axiosInstance.get(`voice/${voiceId}/`)
            .then(res => {
                console.log(res.data.file)
                setAudioUrl(res?.data?.file);
            })
            .catch(err => console.error(err))
    }, [])
    return (
        <AudioContainer audioUrl={audioUrl} />
    )
}

export default Iframe;