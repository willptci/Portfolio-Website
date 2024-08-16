import './App.css';
import SearchAlgoExample from './img/SearchAlgo-Example.png';
import { Link } from 'react-router-dom';

const SearchAlgoLink = () => {
    return(
        <div className="background-container">
            <Link to="/SearchAlgoVisApp">
                <img src={SearchAlgoExample} alt="Search Algorithm Visualizer" className="search-algo-image"/>
                <p>Search Algorithm Visualizer</p>
            </Link>
        </div>
    );
  }
  
  export default SearchAlgoLink;