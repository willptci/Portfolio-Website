import './App.css';
import AndroidAppimg from './img/AndroidApp.png';

const SpotifyWrappedLink = () => {
    const url = "https://sites.google.com/view/2340project2/our-project?authuser=0";

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="background-container">
            <img src={AndroidAppimg} alt="Spotify Wrapped App" className="android-app-img" />
            <p>Spotify Wrapped and Dynamic Music Description App</p>
        </a>
    );
  }
  
  export default SpotifyWrappedLink;