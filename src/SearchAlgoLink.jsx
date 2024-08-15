import './App.css';
import SearchAlgoExample from './img/SearchAlgo-Example.png';
//import { SearchAlgorithm } from 'search-algo';

const SearchAlgoLink = () => {
    return(
        <div className="background-container">
            <img src={SearchAlgoExample} alt="Search Algorithm Visualizer" className="search-algo-image"/>
                
            <p>Search Algorithm Visualizer</p>
        </div>
    );
  }
  
  export default SearchAlgoLink;