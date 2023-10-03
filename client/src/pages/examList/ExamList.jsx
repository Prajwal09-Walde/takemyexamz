import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ExamItem from '../../components/examItems/ExamItem';

const ExamList = () => {
    return (
        <div>
            <Navbar/>
            <div className='examListContainer'>
              <ExamItem/>
            </div>
        </div>
    );
}

export default ExamList;
