import React from 'react';
import './resultCertificate.css';
import Result from '../../components/result/Result';
import Navbar from '../../components/navbar/Navbar';

const ResultCertificate = () => {
    return (
        <div className='result'>
            <Navbar/>
            <div className='resultContainer'>
              <Result
                userName='Anandilal Katpitiya'
                courseName='python'
                examName='python1'
                marksObtained={25}
                isPass={true}
              />
            </div>
        </div>
    );
}

export default ResultCertificate;
