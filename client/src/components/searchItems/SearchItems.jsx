import { Link } from 'react-router-dom';


const SearchItems = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='searchItem'>
      <div className='searchItemContainer d-flex justify-content-sm-space-between' style={{ 'border': '1px solid #000000', 'height': '150px', 'padding': '10px', 'borderRadius': '5px', 'gap': '20px', 'marginBottom': '20px', 'marginLeft': '200px', 'maxWidth': '800px', 'marginTop': '30px', 'marginRight': '180px' }}>
        <span className='searchItemTitle' style={{ 'fontSize': '20px', 'color': '#2723dc' }}>python</span>
        <div className='searchItemDetails flex-1 d-block flex-column justify-content-sm-space-between align-items-sm-right'>
          <span className='searchItemDetailsTime d-flex justify-content-sm-right align-items-sm-center text-align-sm-right' style={{ 'marginLeft': '50px' }}>720 minutes</span>
        </div>
        <Link to='/exams/:courseid'>
          <button className='searchItemButton' onClick={handleSubmit}>See Exams</button>
        </Link>
      </div>
    </div>

  );
}

export default SearchItems;
