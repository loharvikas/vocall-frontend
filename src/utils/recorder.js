const recordAudio = () => {
    return new Promise(resolve => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const mediaRecorder = new MediaRecorder(stream);
                const audioChunks = [];

                mediaRecorder.addEventListener("dataavailable", event => {
                    audioChunks.push(event.data);
                });

                const start = () => {
                    mediaRecorder.start();
                };

                const stop = () => {
                    return new Promise(resolve => {
                        mediaRecorder.addEventListener("stop", () => {
                            const audioBlob = new Blob(audioChunks);
                            const audioUrl = URL.createObjectURL(audioBlob);
                            const mp3fromblob = new File([audioBlob], "incomingaudioclip.mp3");
                            const audio = new Audio(audioUrl);
                            const play = () => {
                                audio.play();
                            };
                            resolve({ audioBlob, audioUrl, play, mp3fromblob, pause });
                        });

                        mediaRecorder.stop();
                    });
                };

                const pause = () => {
                    mediaRecorder.pause();
                }

                const resume = () => {
                    mediaRecorder.resume();
                }

                resolve({ start, stop, pause, resume, stream });
            });
    });
};

export default recordAudio;