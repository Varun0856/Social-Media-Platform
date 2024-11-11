import React, { useState } from 'react';
import './Dashboard.css';


const formatDate = (dob) => {
  const date = new Date(dob);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};


const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Name",
    email: "example@gmail.com",
    joined: "October 2024",
    gender: "Male", 
    dateOfBirth: "2005-06-23",
  });


  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);


  const handleEdit = () => {
    setIsEditing(true);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSave = () => {
    setProfile(formData); 
    setIsEditing(false); 
  };

  
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profile</h2>
        <button onClick={handleEdit}>Edit Profile</button>
      </div>

      {isEditing ? (
        <div className="edit-profile-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <button onClick={handleSave}>Save Changes</button>
        </div>
      ) : (
        <div className="profile-info">
          <h3>{profile.name}</h3>
          <p>Email: {profile.email}</p>
          <p>Joined: {profile.joined}</p>
          <p>Gender: {profile.gender}</p>
          <p>Date of Birth: {formatDate(profile.dateOfBirth)}</p> {/* Format date for display */}
        </div>
      )}
      
      <div className="profile-posts">
        <h3>My Posts</h3>
        <p>Post content 1...</p>
        <p>Post content 2...</p>
      </div>
    </div>
  );
};

export default Profile;
