import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import PortfolioHeader from './PortfolioHeader';
import SearchAlgoLink from './SearchAlgoLink';
import TalkingMojoLink from './TalkingMojoLink';
import TalkingMojo from './TalkingMojo';
import SpotifyWrapped from './SpotifyWrappedLink';
import SpotifyWrappedLink from './SpotifyWrappedLink';

function App() {
  return (
    <div className="Portfolio">
      <PortfolioHeader />
      <div className="Site-Collection">
        <Routes>
          {/* Home route which contains the original content */}
          <Route 
            path="/" 
            element={
              <>
                <div className="pair-container">
                  <SearchAlgoLink />
                  <TalkingMojoLink />
                </div>
                <div className="pair-container">
                  <SpotifyWrappedLink />
                </div>
              </>
            } 
          />
          <Route path="/TalkingMojo" element={<TalkingMojo />} />
          <Route path="/SpotifyWrapped" element={<SpotifyWrapped />} />
          {/* Redirect all other paths to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;