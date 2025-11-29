import React, { useState } from 'react';
import '../../cssFiles/AdminChange.css';
import AdminNavbar from './AdminNavbar';

const Usernamechange = () => {
  const [currentusername, setcurrentusername] = useState('');
  const [newusername, setnewusername] = useState('');
  const [confirmusername, setconfirmusername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newusername === confirmusername) {
      alert("✅ Username changed successfully!");
    } else {
      alert("❌ New usernames do not match.");
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="div1">
        <div className="password-form-container">
          <form onSubmit={handleSubmit}>
            <div className="password-form-group">
              <label htmlFor="current-username">Current Username</label>
              <input
                type="text"
                id="current-username"
                name="current-username"
                value={currentusername}
                onChange={(e) => setcurrentusername(e.target.value)}
                required
              />
            </div>
            <div className="password-form-group">
              <label htmlFor="new-username">New Username</label>
              <input
                type="text"
                id="new-username"
                name="new-username"
                value={newusername}
                onChange={(e) => setnewusername(e.target.value)}
                required
              />
            </div>
            <div className="password-form-group">
              <label htmlFor="confirm-username">Confirm New Username</label>
              <input
                type="text"
                id="confirm-username"
                name="confirm-username"
                value={confirmusername}
                onChange={(e) => setconfirmusername(e.target.value)}
                required
              />
            </div>
            <div className="password-form-group">
              <a href="/" className="password-reset-link">
                Don't know your current username?
              </a>
            </div>
            <div className="password-form-group">
              <button type="submit" className="password-change-button">
                Change Username
              </button>
            </div>
            <div className="password-form-group">
              <button
                type="button"
                className="password-cancel-button"
                onClick={() => window.history.back()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Usernamechange;
