import React, { useState } from 'react';
import '../cssFiles/StaffDetails.css'; 
import { useNavigate } from 'react-router-dom';
import AdminMenu from './AdminFiles/AdminMenu';

const StaffDetailsForm = () => {
  const [formData, setFormData] = useState({
    staffName: '',
    contact: '',
    email: '',
    startTime: '',
    dateOfJoining: '',
    salary: '',
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    for (let key in formData) {
      if (formData[key].trim() === '') {
        alert(`Please fill the field: ${key}`);
        return;
      }
    }

    alert("Data saved successfully!");

    setFormData({
      staffName: '',
      contact: '',
      email: '',
      startTime: '',
      dateOfJoining: '',
      salary: '',
      username: '',
      password: ''
    });
  };

  const handleCancel = () => {
    setFormData({
      staffName: '',
      contact: '',
      email: '',
      startTime: '',
      dateOfJoining: '',
      salary: '',
      username: '',
      password: ''
    });
    navigate(-1);
  };

  return (
    <>
      <AdminMenu/>
      <div className='bodyback'>
        <form onSubmit={handleSubmit} className="staff-form">
          <h2>Staff Details</h2>
          {Object.keys(formData).map((key) => {
            // Determine input type dynamically
            let inputType = 'text';
            if (key === 'password') inputType = 'password';
            else if (key === 'email') inputType = 'email';
            else if (key === 'dateOfJoining' || key === 'startTime') inputType = 'date';

            return (
              <div className="form-group" key={key}>
                <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                <input
                  type={inputType}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                />
              </div>
            );
          })}

          <div className="button-group">
            <button type="submit" className="submit-button">Save</button>
            <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StaffDetailsForm;
