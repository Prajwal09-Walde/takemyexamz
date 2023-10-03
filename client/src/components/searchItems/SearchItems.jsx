import { Link } from 'react-router-dom';
import './searchItems.css';

const SearchItems = () => {

    const handleSubmit = (e) => {
       e.preventDefault();
    };
    
    return (
        <div className='searchItem'>
            <div className='searchItemContainer'>
              <span className='searchItemTitle'>python</span>
              <div className='searchItemDetails'>
                <span className='searchItemDetailsTime'>720 minutes</span>
              </div>
              <Link to='/exams/:courseid'>
                <button className='searchItemButton' onClick={handleSubmit}>See Exams</button>
              </Link>
            </div>
        </div>

    );
}

export default SearchItems;
