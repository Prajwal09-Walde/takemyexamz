import { useState } from 'react';
import './courseForm.css';
import ExamForm from '../newExam/ExamForm';


const CourseForm = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.warn({name, desc});
        const data = {name, desc};
        fetch('http://localhost:8500/api/courses', {
            method: 'POST',
            headers: {
                'Accepted': 'application/json',
                'Content-type': 'application/json',
            }, body: JSON.stringify(data),
        }).then((res) => {
            res.json().then((rs) => {
                console.log('rs', rs);
            })
        })
    } 

    return (
        <div className='courseForm'>
          <h2>Course Form</h2>
          <div className='courseContainer'>
            <div className='courseList'>
            <form>
                <div className='courseListItem'>
                    <input
                        type='text'
                        placeholder='course name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <br/>
                <div className='courseListItem'>
                    <input
                        type='text'
                        placeholder='course desc'
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <br/>
                <button onClick={handleSubmit}>Create Course</button>
            </form>
            </div>
          </div>
          <ExamForm/>
        </div>
    );
}

export default CourseForm;
