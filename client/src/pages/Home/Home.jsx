import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Login from '../../components/Login/Login';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div>
                <Login />
            </div>
        </div>
    );
}

export default Home;
