import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import mojo from './img/Mojo-Cam.png';

const TalkingMojoLink = () => {
    return (
        <div className="background-container">
            <Link to="/TalkingMojo"> 
                <img src={mojo} alt="Talking Dog" className="talking-mojo-image"/>
                <p>Rude Talking Dog</p>
            </Link>
        </div>
    );
}

export default TalkingMojoLink;