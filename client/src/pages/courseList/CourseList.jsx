import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import SearchItems from '../../components/searchItems/SearchItems';

const CourseList = () => {
    return (
        <div>
           <Navbar/> 
           <div className='courseListContainer'>
             <SearchItems/>
             <SearchItems/>
             <SearchItems/>
             <SearchItems/>
             <SearchItems/>
           </div>
        </div>
    );
}

export default CourseList;
