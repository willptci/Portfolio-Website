import './App.css';
import React, { useRef } from 'react';
import { ColorModeContext, useMode } from "./Algo-Visualizer/theme";
import { CssBaseline, ThemeProvider } from '@mui/material';
import PathfindingVisualizer from './Algo-Visualizer/PathfindingVisualizer/PathfindingVisualizer';
import TopBar from './Algo-Visualizer/NavBars/TopBar';
import SideBar from './Algo-Visualizer/NavBars/SideBar';


function SearchAlgoVisApp() {
  const [theme, colorMode] = useMode();
  const pathfindingVisualizerRef = useRef(null);
  const searchAlgoCaller = () => {
    if (pathfindingVisualizerRef.current) {
      pathfindingVisualizerRef.current.searchAlgoCaller();
    }
  };
  const callClearGrid = () => {
    if (pathfindingVisualizerRef.current) {
      pathfindingVisualizerRef.current.clearGrid();
    }
  };
  const callClearAnimation = () => {
    if (pathfindingVisualizerRef.current) {
      pathfindingVisualizerRef.current.clearAnimation();
    }
  };
  const callToggleTerrain = () => {
    if (pathfindingVisualizerRef.current) {
      pathfindingVisualizerRef.current.toggleTerrainMode();
    }
  };

  const callToggleGridMode = () => {
    if (pathfindingVisualizerRef.current) {
      pathfindingVisualizerRef.current.toggleGridMode();
    }
  }

  const handleBFSClick = () => {
    if (pathfindingVisualizerRef.current) {
      pathfindingVisualizerRef.current.switchBFS();
    }
  }

  const handleDijkstraClick = () => {
    if (pathfindingVisualizerRef.current) {
      pathfindingVisualizerRef.current.switchDijkstra();
    }
  }

  const handleDFSClick = () => {
    if (pathfindingVisualizerRef.current) {
      pathfindingVisualizerRef.current.switchDFS();
    }
  }

  const handleAstarClick = () => {
    if (pathfindingVisualizerRef.current) {
      pathfindingVisualizerRef.current.switchAstar();
    }
  }

  

  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <div className="PathfindingVisualizer">
            <SideBar toggleTerrainMode={callToggleTerrain} toggleGridMode={callToggleGridMode} handleDijkstraClick={handleDijkstraClick} handleBFSClick={handleBFSClick} handleDFSClick={handleDFSClick} handleAstarClick={handleAstarClick}></SideBar>
            <main className="content">
              <TopBar searchAlgoCaller={searchAlgoCaller} clearGrid={callClearGrid} clearAnimation={callClearAnimation}></TopBar>
              <div className="grid">
                <PathfindingVisualizer ref={pathfindingVisualizerRef}></PathfindingVisualizer>
              </div>
            </main>
          </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default SearchAlgoVisApp;
