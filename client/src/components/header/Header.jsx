import React, { useState } from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
    const [course, setCourse] = useState('');

    const navigate = useNavigate();

    const handleSearch = () => {
      navigate("/courses", {state: {course}});
    } 
    return (
        <div className='header'>
           <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
             <div className='headerList'>
               <div className='headerListItems'>
                 <div className='headerListItems active'>
                   <span>Courses</span>
                 </div>
               </div>
               <div className='headerListItems'>
                 <div className='headerListItems active'>
                   <span>Contact</span>
                 </div>
               </div>
               <div className='headerListItems'>
                 <div className='headerListItems active'>
                   <span>Dashboard</span>
                 </div>
               </div>
               <div className='headerListItems'>
                 <div className='headerListItems active'>
                   <span>Exams</span>
                 </div>
               </div>
               <div className='headerListItems'>
                 <div className='headerListItems active'>
                   <span>About us</span>
                 </div>
               </div>
             </div>
             <div className='headerSearch'>
                 <div className='headerSearchItem'>
                   <input
                     type='text'
                     placeholder='Enter your course'
                     value={course}
                     onChange={(e) => setCourse(e.target.value)}
                   />
                   <button onClick={handleSearch}>Search</button>
                 </div>
             </div>
           </div> 
        </div>
    );
}

export default Header;
