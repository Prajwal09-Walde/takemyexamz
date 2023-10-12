import { useState } from 'react';
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
      <Navbar />
      <h1 className='d-flex text-align-sm-center align-items-sm-center justify-content-sm-center' style={{ 'fontWeight': 'bold', 'marginTop': '30px', 'marginLeft': '150px' }}>Registration</h1>
      <div className='registrationContainer justify-content-sm-center align-items-sm-center d-flex' style={{ 'backgroundColor': '#3dbee9', 'padding': '20px', 'maxWidth': '450px', 'width': '100%', 'marginLeft': '400px', 'marginTop': '40px', 'marginBottom': '30px', 'borderRadius': '10px' }}>
        <div className='registrationList'>
          <form className='form-group'>
            <div className='registrationListItem d-block justify-content-sm-center align-items-sm-center text-align-sm-center'>
              <label>Email: </label>
              <input
                type='text'
                placeholder='email'
                className='form-control'
                value={details.email}
                onChange={(e) => setDetails({ ...details, email: e.target.value })}
              />
            </div>
            <br />
            <div className='registrationListItem d-block justify-content-sm-center align-items-sm-center text-align-sm-center'>
              <label>Name: </label>
              <input
                type='text'
                placeholder='name'
                className='form-control'
                value={details.name}
                onChange={(e) => setDetails({ ...details, name: e.target.value })}
              />
            </div>
            <br />
            <div className='registrationListItem d-block justify-content-sm-center align-items-sm-center text-align-sm-center'>
              <label>Gender: </label>
              <input
                type='text'
                placeholder='gender'
                className='form-control'
                value={details.gender}
                onChange={(e) => setDetails({ ...details, gender: e.target.value })}
              />
            </div>
            <br />
            <div className='registrationListItem d-block justify-content-sm-center align-items-sm-center text-align-sm-center'>
              <label>Phone-No: </label>
              <input
                type='text'
                placeholder='Phone-No'
                className='form-control'
                value={details.phoneNo}
                onChange={(e) => setDetails({ ...details, phoneNo: e.target.value })}
              />
            </div>
            <br />
            <div className='registrationListItem d-block justify-content-sm-center align-items-sm-center text-align-sm-center'>
              <label>Password: </label>
              <input
                type='password'
                placeholder='password'
                className='form-control'
                value={details.password}
                onChange={(e) => setDetails({ ...details, password: e.target.value })}
              />
            </div>
            <br />
            <Link to='/'>
              <button className='registerButton justify-content-sm-center align-items-sm-center text-align-sm-center cursor-pointer' style={{ 'padding': '10px', 'marginLeft': '70px', 'backgroundColor': '#2723dc', 'color': '#ffffff', 'border': 'none' }} onClick={handleSubmit}>Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
