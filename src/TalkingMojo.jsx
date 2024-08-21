import React, { useState , useRef, useEffect } from 'react';
import axios from 'axios';
import FileUpload from './FileUpload';
import MojoVid from './img/MojoVid.mp4';
import WebcamStream from './WebcamStream';

const TalkingMojo = () => {

    const [showVideo, setShowVideo] = useState(false);
    const audioRef = useRef(null);

    const handleStart = async () => {
        setShowVideo(true);
        //try {
        //    await axios.post('https://mojo-portfolio-flask-backend-faed9792e71b.herokuapp.com/start_video');
        //} catch (error) {
        //    console.error('Error starting video feed:', error);
        //}
    };

    const handleStop = async () => {
        setShowVideo(false);
        //try {   
        //    await axios.post('https://mojo-portfolio-flask-backend-faed9792e71b.herokuapp.com/stop_video');
        //} catch (error) {
        //    console.error('Error stopping video feed:', error);
        //}
    };

    const checkForNewTTS = async () => {
        try {
            // Fetch the latest TTS text from the backend
            const textResponse = await axios.get('https://mojo-portfolio-flask-backend-faed9792e71b.herokuapp.com/get_latest_text');
            const text = textResponse.data.text;
    
            if (text) {
                // Send text as JSON in the request body
                const ttsResponse = await axios.post('https://mojo-portfolio-flask-backend-faed9792e71b.herokuapp.com/tts', { text }, { responseType: 'blob' });
                const audioBlob = new Blob([ttsResponse.data], { type: 'audio/mpeg' });
                const audioUrl = URL.createObjectURL(audioBlob);
                if (audioRef.current) {
                    audioRef.current.src = audioUrl;
                    audioRef.current.play();
                }
            }
        } catch (error) {
            console.error('Error fetching latest audio:', error);
        }
    };

    useEffect(() => {
        let intervalId;
        if (showVideo) {
            intervalId = setInterval(checkForNewTTS, 11000); // Check every 10 seconds
        }
        return () => clearInterval(intervalId);
    }, [showVideo]);

    return (
        <div className='mojo-page'>
            <div className='mojo-description-vid'>
                <video width="400" controls>
                    <source src={MojoVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='mojo-description'>
                    <h1 className='title'> Rude Talking Dog </h1>
                    <p className='Introduction'> This Project was made entirely for fun with cv2's facial recognition software and chatGTP's language generator.</p>
                    <p className='Introduction'> The goal was to connect my DJI camera to the collar of my dog and use the live feed to address whoever my dog is looking at with a rude and humorous comment that a dog might say.</p>
                    <p className='Introduction'> Here is my friend Tristan! </p>
                </div>
            </div>
            <h2 className='upload-image-title'>Upload Image for Face Recognition</h2>
            <div className='button-vid-container'>
                <div className='upload-container'>
                    <FileUpload/>
                    <p className='Introduction'> To make this project accessible on my site, I used a Flask backend, hosted on Heroku.</p>
                </div>
                <div className='video-feed-container'>
                    <div className='upload-buttons'>
                        <button onClick={handleStart} disabled={showVideo}>Start</button>
                        <button onClick={handleStop} disabled={!showVideo}>Stop</button>
                    </div>
                    <h2>Live Video Feed</h2>
                    {showVideo && <WebcamStream/>}
                </div>
            </div>
            <audio ref={audioRef} style={{ display: 'none' }} />
        </div>
    );
}

export default TalkingMojo;

