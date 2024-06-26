import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error when the user starts entering text
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  
  
    const validateForm = () => {
      let isValid = true;
      const newErrors = { ...errors };
  
      // Validation logic
      if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
        newErrors.fullName = 'Username should have only characters and spaces';
        isValid = false;
      }
  
      if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
        newErrors.mobileNumber = 'Mobile number should have only ten digits and starting with 6,7,8 or 9 ';
        isValid = false;
      }
  
      // Password validation
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,15}$/;
      if (!passwordRegex.test(formData.password)) {
        newErrors.password = 'password should be having at leaset one capital, one small letter and one digit and one special charcter and no spaces allowed and length should be between 6 to 15 ';
        isValid = false;
      }
  
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
        isValid = false;
      }
  
      setErrors(newErrors);
      return isValid;
    };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    // Form is not valid, do not proceed with the submission
    return;
  }

  try {
    // Add your backend API endpoint
    const apiUrl = 'https://usermanagementsystem-cllm.onrender.com/updateUser';

 //   const apiUrl = 'http://localhost:8080/updateUser';

    // Retrieve the JWT token from local storage
    const token = localStorage.getItem('jwtToken');

    
    // Make a PUT request to the backend API with headers
    const response = await axios.put(apiUrl, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Handle the response (you can add more logic here)
    console.log('API Response:', response.data);

    if (response.status === 200) {
      
      window.alert("Updated Successfully");
      navigate('/login');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Update Form</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>FullName:</td>
                <td>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && <div className="error">{errors.fullName}</div>}
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="error">{errors.email}</div>}
                </td>
              </tr>
              <tr>
                <td>Mobile Number:</td>
                <td>
                  <input
                    type="text"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                  {errors.mobileNumber && <div className="error">{errors.mobileNumber}</div>}
                </td>
              </tr>
              <tr>
                <td>Password:</td>
                <td>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <div className="error">{errors.password}</div>}
                </td>
              </tr>
              <tr>
                <td>Confirm Password:</td>
                <td>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <div className="error">{errors.confirmPassword}</div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
