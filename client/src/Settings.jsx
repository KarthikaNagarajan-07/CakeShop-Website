import React, { useState } from 'react';
import './Settings.css';

const AdminSettingsPage = () => {
    const [settings, setSettings] = useState({
        siteName: 'My Shop',
        adminEmail: 'admin@example.com',
        theme: 'light',
        enableNotifications: true,
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setSettings({
            ...settings,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSaveSettings = () => {
        // Save the settings to the server or local storage
        console.log('Settings saved:', settings);
    };

    return (
        <div className="admin-settings-page">
            <h2>Admin Settings</h2>
            <form className="settings-form">
                <label>
                    Site Name:
                    <input
                        type="text"
                        name="siteName"
                        value={settings.siteName}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Admin Email:
                    <input
                        type="email"
                        name="adminEmail"
                        value={settings.adminEmail}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Theme:
                    <select
                        name="theme"
                        value={settings.theme}
                        onChange={handleInputChange}
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </label>
                <label>
                    Enable Notifications:
                    <input
                        type="checkbox"
                        name="enableNotifications"
                        checked={settings.enableNotifications}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="button" onClick={handleSaveSettings}>
                    Save Settings
                </button>
            </form>
        </div>
    );
};

export default AdminSettingsPage;
