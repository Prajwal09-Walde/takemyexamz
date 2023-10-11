import React from 'react';
import './examItem.css';
import { Link } from 'react-router-dom';

const ExamItem = () => {
  return (
    <div className='ExamListItem'>
      <div className='examListContainer'>
        <table>
          <thead>
            <tr>
              <th>Exam Name</th>
              <th>Full Marks</th>
              <th>Pass Marks</th>
              <th>Time(in minutes)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>python 1</td>
              <td>50</td>
              <td>20</td>
              <td>30</td>
              <td>
                <Link to="/exams/:courseid/:examid">
                  <button style={{ 'backgroundColor': '#2723dc', 'color': '#ffffff', 'border': 'none' }}>Enter</button>
                </Link>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>python 2</td>
              <td>50</td>
              <td>20</td>
              <td>30</td>
              <td>
                <Link to="/exams/:courseid/:examid">
                  <button style={{ 'backgroundColor': '#2723dc', 'color': '#ffffff', 'border': 'none' }}>Enter</button>
                </Link>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default ExamItem;
