import React from 'react';
import './viewExam.css';

const ViewExam = () => {
    return (
        <div className='viewExam'>
          <h2>Exams</h2>
          <div className='viewExamContainer'>
            <table>
              <thead>
                 <th>Exam ID</th>
                 <th>Exam name</th>
                 <th>Full marks</th>
                 <th>Pass marks</th>
              </thead>
              <tbody>
                 <tr>
                   <td>id1</td>
                   <td>python1</td>
                   <td>50</td>
                   <td>20</td>
                 </tr>
              </tbody>
              <tbody>
              <tr>
                <td>id2</td>
                <td>python2</td>
                <td>50</td>
                <td>20</td>
              </tr>
           </tbody>
            </table>
          </div>
        </div>
    );
}

export default ViewExam;
