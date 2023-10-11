import { useState } from 'react';
import ExamForm from '../newExam/ExamForm';


const CourseForm = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.warn({ name, desc });
        const data = { name, desc };
        fetch('https://takemyexamz.onrender.com/api/courses', {
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
            <h2 className='text-align-sm-left' style={{ 'marginLeft': '70px' }}>Course Form</h2>
            <div className='courseContainer d-block justify-content-sm-center align-items-sm-center text-align-sm-center' style={{ 'backgroundColor': '#3dbee9', 'height': '220px', 'maxWidth': '250px', 'borderRadius': '10px', 'marginBottom': '40px', 'marginLeft': '30px', 'marginTop': '30px', 'padding': '30px', 'paddingBottom': '10px', 'paddingTop': '50px' }}>
                <div className='courseList'>
                    <form className='form-group'>
                        <div className='courseListItem'>
                            <input
                                type='text'
                                className='form-input justify-content-sm-center align-items-sm-center'
                                style={{ 'border': 'none', 'outline': 'none' }}
                                placeholder='course name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <br />
                        <div className='courseListItem'>
                            <input
                                type='text'
                                className='form-input'
                                style={{ 'border': 'none', 'outline': 'none', 'maxWidth': '350px' }}
                                placeholder='course desc'
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </div>
                        <br />
                        <button onClick={handleSubmit} className='button align-items-sm-center justify-content-sm-center cursor-pointer' style={{ 'backgroundColor': '#2723dc', 'border': 'none', 'color': '#ffffff', 'marginLeft': '30px' }}>Create Course</button>
                    </form>
                </div>
            </div>
            <ExamForm />
        </div>
    );
}

export default CourseForm;
