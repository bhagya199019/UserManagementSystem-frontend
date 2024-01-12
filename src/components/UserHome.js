import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom'; // Import Link for navigation
import './UserHome.css'; // Import the CSS file for styling



const UserHome = () => {

  const [isProfileUpdated, setProfileUpdated] = useState(false);
  const [setErrors] = useState({}); // State to track validation errors
  const navigate = useNavigate();

  // Function to reset the alert state
  const resetAlert = () => {
    setProfileUpdated(false);
  };
  const handlleProfileUser= () =>{
    navigate('/updateUser');
  }
  
  const handleGetAllUser = () =>{
    navigate('/getUsers');
  }
  // Function to handle delete user
  const handleDeleteUser = () => {
    navigate('/deleteUser');
    
  };

  return (
    <div className="user-home-container">
      <h2>Welcome to Your User Home Page!</h2>
      <p>Lets update your profile here.</p>

      {/* Display alert message when the profile is successfully updated */}
      {isProfileUpdated && (
        <div className="alert" onClick={resetAlert}>
          Profile updated successfully!
        </div>
      )}

      {/* Form for updating user profile */}
      <form className="profile-form" onSubmit={handlleProfileUser}>
        {/* ... (existing form fields) */}

        <div className="form-group">
          <button type="submit">Update Profile</button><br/>
        </div>
      </form>

      {/* Delete user button */}
      <div className="delete-button-container">
        <p> click on delete to delete User</p>
        <button onClick={handleDeleteUser} className="delete-button">
          Delete User
        </button>
      </div><br/>
      {/* get All user Detailsbutton */}
      <div className="blue-button-container ">
      <p> click on get all users to view the users list</p>
        <button onClick={handleGetAllUser} className="blue-button">
          get All Users
        </button>
      </div><br/>

      {/* Back to Home button */}
      
    </div>
  );
};

export default UserHome;



