



// import React, { useState } from 'react';
// import axios from 'axios';
import { Button, createTheme, ThemeProvider, TextField } from '@mui/material';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
// import my from '../assest/logo22.jpg';

// function Registerform() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     email: '',
//     gender: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [errorss, setErrors] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     email: '',
//     gender: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errorss, [name]: '' });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
//       alert('Please fill in all fields');
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     // Store data in local storage
//     const user = {
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       email: formData.email,
//       password: formData.password,
//     };

//     // You may want to check if the email already exists in local storage before adding it
//     // For simplicity, this example does not perform such a check

//     localStorage.setItem('user', JSON.stringify(user));

//     // Reset form after submission
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     });

//     alert('Signup successful!');
//   };



//   const validateForm = (data) => {
//     const errors = {};

//     // Validate username
//     if (!data.username.trim()) {
//       errors.username = 'Username is required';
//     }

//     // Validate email
//     if (!data.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//       errors.email = 'Invalid email address';
//     }

//     // Validate password
//     if (!data.password.trim()) {
//       errors.password = 'Password is required';
//     } else if (data.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters';
//     }
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
//     return errors;
//   };

//   const theme = createTheme({
//     // your theme configuration
//   });

//   return (
//     <div style={{
//       marginLeft: '450px',
//       marginTop: '25px',
//       backgroundColor: '#3a16014b',
//       color: 'rgb(50, 30, 9)',
//       padding: '10px 50px',
//       width: '750px',
//       height: '570px',
//       overflow: 'hidden',
//       fontFamily: 'URW Chancery L, cursive',
//       borderRadius: '30px'
//     }}>
//       <h2 style={{ textAlign: 'center', backgroundColor: '#3a16014b', padding: '8px' }}>Register</h2>
//       <div style={{
//         marginRight: '500px'
//       }}>
//         <img src={my} height='480px' width='350px' alt="Logo"></img>
//       </div>
//       <form className='frm' onSubmit={handleSubmit}>

//         {/* ... Your other form fields ... */}
//         <TextField required input type="text" name="firstName" placeholder="First Name" onChange={handleChange} /><br/>
//         <TextField required input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} /><br/>
//         <TextField required input type="text" name="username" placeholder="Username" onChange={handleChange} /><br/>
        
//         {/* < select name="gender" onChange={handleChange}>
//           <option value="" disabled selected>
//             Gender
//           </option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select><br/> */}
//         <TextField required input type="email" name="email" placeholder="Email" onChange={handleChange} /><br/>
//         <TextField required input type="password" name="password" placeholder="Password" onChange={handleChange} /><br/>
//         <TextField required input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} /><br/>

        
//           <Button type='submit' variant='contained' color='secondary'>Register</Button>
        
//       </form><br></br>
//     </div>
//   );
// }

// export default Registerform;

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import my from '../assest/logo22.jpg';


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    try {
      // Check if the username or email already exists in the database
      const users = await axios.get('http://localhost:3001/users');
      const foundUser = users.data.find(
        (user) => user.username === formData.username || user.email === formData.email
      );
  
      if (foundUser) {
        if (foundUser.username === formData.username) {
          setErrors({ ...errors, username: 'Username already exists' });
        }
        if (foundUser.email === formData.email) {
          setErrors({ ...errors, email: 'Email already exists' });
        }
        return;
      }
  
      // If no existing user found, proceed with registration
      const response = await axios.post('http://localhost:3001/users', formData);
      console.log('Registration successful!', response.data);
      // Redirect or handle success as needed
    } catch (error) {
      console.error('Registration failed!', error);
      // Handle error scenarios
    }
  };

    const validateForm = (data) => {
      const errors = {};
      if (!data.firstName) {
        errors.firstName = 'First Name is required';
      }
      if (!data.lastName) {
        errors.lastName = 'Last Name is required';
      }
      if (!data.username) {
        errors.username = 'Username is required';
      }
      if (!data.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Invalid email address';
      }
      if (!data.gender) {
        errors.gender = 'Gender is required';
      }
      if (!data.password) {
        errors.password = 'Password is required';
      } else if (data.password.length < 8) {
        errors.password =
          'Password must be at least 8 characters long ';
      }
      if (data.password !== data.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
      return errors;
    };

    return (
      <div style={{
            marginLeft: '450px',
            marginTop: '10px',
            backgroundColor: '#3a16014b',
            color: 'rgb(50, 30, 9)',
            padding: '10px 50px',
            width: '750px',
            height: '590px',
            overflow:'hidden',
            fontFamily: 'URW Chancery L, cursive',
            borderRadius: '30px'}}>
          <form onSubmit={handleSubmit}>
            <h3>Registration Form</h3>
            
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                className="form-control"
              />
              {errors.firstName && (
                <span className="error">
                  <i className="zmdi zmdi-close-circle"></i> {errors.firstName}
                </span>
              )}
              <br/>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                className="form-control"
              />
              {errors.lastName && (
                <span className="error">
                  <i className="zmdi zmdi-close-circle"></i> {errors.lastName}
                </span>
              )}
            
            <br/>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                className="form-control"
              />
              {errors.username && (
                <span className="error">
                  <i className="zmdi zmdi-close-circle"></i> {errors.username}
                </span>
              )}
            
            <br/>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="form-control"
              />
              {errors.email && (
                <span className="error">
                  <i className="zmdi zmdi-close-circle"></i> {errors.email}
                </span>
              )}
            
            <br/>
              <select id="" className="form-control" name="gender" onChange={handleChange}>
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <span className="error">
                  <i className="zmdi zmdi-close-circle"></i> {errors.gender}
                </span>
              )}
            
            <br/>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="form-control"
              />
              {errors.password && (
                <span className="error">
                  <i className="zmdi zmdi-close-circle"></i> {errors.password}
                </span>
              )}
            <br/>
            
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                className="form-control"
              />
              {errors.confirmPassword && (
                <span className="error">
                  <i className="zmdi zmdi-close-circle"></i> {errors.confirmPassword}
                </span>
              )}
           
           <br/>
              <p>
                Already have an account?{' '}
                <Link to="/login" className="lin">
                  Login
                </Link>
              </p>
           
            <button className="glow-on-hover" type="submit">
              Register
              <i className="zmdi zmdi-arrow-right" />
            </button>
          </form>
        
      </div>
    );
  };

  export default RegisterForm;