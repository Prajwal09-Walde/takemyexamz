import { useState } from 'react';
import './registration.css';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [details, setDetails] = useState(
        {
            email: '',
            name: '',
            gender: '',
            phoneNo: '',
            password: '',
        }
    );


    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='registration'>
            <Navbar type='!button'/>
            <h1>Registration</h1>
            <div className='registrationContainer'>
              <div className='registrationList'>
                <form>
                  <div className='registrationListItem'>
                    <label>Email: </label>
                    <input
                      type='text'
                      placeholder='email'
                      value={details.email}
                      onChange={(e) => setDetails({...details, email: e.target.value})}
                    />
                  </div>
                  <br/>
                  <div className='registrationListItem'>
                    <label>Name: </label>
                    <input
                      type='text'
                      placeholder='name'
                      value={details.name}
                      onChange={(e) => setDetails({...details, name: e.target.value})}
                    />
                  </div>
                  <br/>
                  <div className='registrationListItem'>
                    <label>Gender: </label>
                    <input
                      type='text'
                      placeholder='gender'
                      value={details.gender}
                      onChange={(e) => setDetails({...details, gender: e.target.value})}
                    />
                  </div>
                  <br/>
                  <div className='registrationListItem'>
                    <label>Phone-No: </label>
                    <input
                      type='text'
                      placeholder='Phone-No'
                      value={details.phoneNo}
                      onChange={(e) => setDetails({...details, phoneNo: e.target.value})}
                    />
                  </div>
                  <br/>
                  <div className='registrationListItem'>
                    <label>Password: </label>
                    <input
                      type='password'
                      placeholder='password'
                      value={details.password}
                      onChange={(e) => setDetails({...details, password: e.target.value})}
                    />
                  </div>
                  <br/>
                  <Link to='/'>
                    <button className='registerButton' onClick={handleSubmit}>Register</button>
                  </Link>
                </form>
              </div>
            </div>
        </div>
    );
}

export default Registration;
