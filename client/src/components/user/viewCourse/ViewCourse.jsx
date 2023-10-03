import React, { useState } from 'react';
import './viewCourse.css';
import ViewExam from '../viewExam/ViewExam';

const ViewCourse = () => {
    const [Course, setCourse] = useState([]);

    const onView = () => {
        const data = {Course}
        fetch ('', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }, body: JSON.stringify(data),
        })
        .then((res) => {
            res.json().then((rs) => {
                console.log('rs', rs);
            })
        })
        setCourse(data);
    }
    return (
        <div>
          <div className='viewCourse'>
            <div className='viewCourseContainer'>
              <table onLoad={onView}>
                 <thead>
                   <tr>
                      <th>Course ID</th>
                      <th>Course Name</th>
                      <th>Course Description</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                      <td>id</td>
                      <td>python</td>
                      <td>Solve Basic questions and get the certificate</td>
                   </tr>
                 </tbody>
                 <tbody>
                   <tr>
                      <td>id</td>
                      <td>mathematics</td>
                      <td>Basic BODMAS rules questions</td>
                   </tr>
                 </tbody>
                 <tbody>
                   <tr>
                      <td>id</td>
                      <td>java</td>
                      <td>Basic Java Questions</td>
                   </tr>
                 </tbody>
                 <tbody>
                   <tr>
                      <td>id</td>
                      <td>dbms</td>
                      <td>Selection of items</td>
                   </tr>
                 </tbody>
              </table>
            </div>
            <ViewExam/>
          </div> 
        </div>
    );
}

export default ViewCourse;
