import React from 'react';
import './result.css';

const Result = ({isPass, userName, courseName, examName, marksObtained}) => {
    return (
        <div className='result'>
            <h2 className='resultTitle'>Result</h2>
            <br/>
            <p className='rComponent'>User Name:  {userName}</p>
            <br/>
            <p className='rComponent'>Course Name:  {courseName}</p>
            <br/>
            <p className='rComponent'>Exam Name:  {examName}</p>
            <br/>
            <p className='rComponent'>Marks obtained:  {marksObtained}</p>
            <br/>
            <p className='rComponent'>Status:  {isPass ? 'Pass' : 'Fail'}</p>
        </div>
    );
}

export default Result;
