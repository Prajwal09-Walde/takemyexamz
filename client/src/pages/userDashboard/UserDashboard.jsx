import React from 'react';
import ViewCourse from '../../components/user/viewCourse/ViewCourse';
import Navbar from '../../components/navbar/Navbar';

const UserDashboard = () => {
    return (
        <div className='userDashboard'>
            <Navbar/>
            <h1>User Dashboard</h1>
            <div className='userTitle'>
              <h2>Courses</h2>
              <ViewCourse/>
            </div>
        </div>
    );
}

export default UserDashboard;
