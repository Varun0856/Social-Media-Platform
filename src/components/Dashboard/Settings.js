import React from 'react';
import './Dashboard.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-section">
        <h3>Account Settings</h3>
        <button>Change Password</button>
        <button>Privacy Settings</button>
      </div>
      <div className="settings-section">
        <h3>Notifications</h3>
        <label>
          <input type="checkbox" /> Enable email notifications
        </label>
        <label>
          <input type="checkbox" /> Enable SMS notifications
        </label>
      </div>
      <div className="settings-section">
        <h3>Other</h3>
        <button>Delete Account</button>
      </div>
    </div>
  );
};

export default Settings;
