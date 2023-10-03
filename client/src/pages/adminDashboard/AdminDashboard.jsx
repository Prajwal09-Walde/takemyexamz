import { useEffect, useState } from 'react';
import './adminDashboard.css';
import Navbar from '../../components/navbar/Navbar';
import CourseForm from '../../components/admin/newCourse/CourseForm';


const AdminDashboard = () => {
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
      fetch('https://takemyexamz.onrender.com/api/courses')
      .then((rs) => {
        if(!rs.ok) {
          throw new Error('Error while retrieving data');
        }
        return rs.json()
      })
      .then((courseData) => {
        const updatedCourseData = courseData.map((data) => ({
          ...data,
          _id: data._id.toString(),
        }));
        setCourseData(updatedCourseData);
      })
      .catch ((err) => {
        console.error('Error', err);
      })
    }, [])

    return (
        <div>
          <Navbar/>
          <h1>Admin Dashboard</h1>
          <div className='adminTitle'>
            <CourseForm/>
            <table>
               <thead>
                  <tr>
                    <th>Course ID</th>
                    <th>Course Name</th>
                    <th>Course Description</th>
                  </tr>
               </thead>
               <tbody>
                  {courseData.map((data) => (
                    <tr key={data._id}>
                      <td>{data._id}</td>
                      <td>{data.name}</td>
                      <td>{data.desc}</td>
                    </tr>
                  ))}
               </tbody>
            </table>
          </div>
        </div>
    );
}

export default AdminDashboard;
