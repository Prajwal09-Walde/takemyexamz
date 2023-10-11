import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
  const [course, setCourse] = useState('');

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/courses", { state: { course } });
  }
  return (
    <div className='header d-flex align-items-sm-center justify-contents-sm-center position-relative' style={{ 'backgroundColor': '#3dbee9', 'color': '#ffffff' }}>
      <div className={type === "list" ? "headerContainer listMode mt-20px mr-0px mb-0px ml-0px" : "headerContainer"} style={{ 'width': '100%', 'maxWidth': 'max-content', 'margin': '20px 0px 100px 0px' }}>
        <div className='headerList d-flex mb-50px g-40px'>
          <div className='headerListItems d-flex align-items-sm-center g-10px'>
            <div className='headerListItems active border border-white cursor-pointer' style={{ 'border': '1px solid', 'borderRadius': '10px', 'padding': '10px', 'marginLeft': '40px', 'marginRight': '20px' }}>
              <span>Courses</span>
            </div>
          </div>
          <div className='headerListItems d-flex align-items-sm-center g-10px'>
            <div className='headerListItems active border border-white cursor-pointer' style={{ 'border': '1px solid', 'borderRadius': '10px', 'padding': '10px', 'marginRight': '20px' }}>
              <span>Contact</span>
            </div>
          </div>
          <div className='headerListItems'>
            <div className='headerListItems active border border-white cursor-pointer' style={{ 'border': '1px solid', 'borderRadius': '10px', 'padding': '10px', 'marginRight': '20px' }}>
              <span>Exams</span>
            </div>
          </div>
          <div className='headerListItems'>
            <div className='headerListItems active border border-white cursor-pointer' style={{ 'border': '1px solid', 'borderRadius': '10px', 'padding': '10px', 'marginRight': '20px' }}>
              <span>About us</span>
            </div>
          </div>
        </div>
        <div className='headerSearch d-flex align-items-sm-center justify-content-sm-left position-relative' style={{ 'backgroundColor': '#ffffff', 'height': '30px', 'paddingLeft': '10px', 'marginBottom': '20px', 'maxWidth': '300px', 'borderRadius': '20px', 'marginTop': '40px', 'marginLeft': '40px' }}>
          <div className='headerSearchItem'>
            <input
              type='text'
              placeholder='Enter your course'
              className='text-align-sm-center'
              style={{ 'height': '20px', 'border': 'none' }}
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
            <button onClick={handleSearch} className='mb-10px' style={{ 'backgroundColor': '#2723dc', 'color': '#ffffff', 'border': 'none' }}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
