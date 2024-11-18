import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'; // Import the CSS file

function Dashboard() {
    const [users, setUser] = useState([]); // Initialize users as an empty array
    const [error, setError] = useState(null); // Add an error state
    const navigate = useNavigate(); // Initialize navigate

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:3001/admin')
            .then(response => {
                console.log(response.data); // Log the response data
                if (Array.isArray(response.data)) {
                    setUser(response.data);
                } else {
                    setError("Invalid data format received from the server.");
                }
            })
            .catch(err => {
                console.log(err);
                setError("Error fetching users.");
            });
    }, []);

    const handleBack = () => {
        navigate('/admin'); // Navigate to the admin page
    };

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="dashboard">
            <h2>User Details</h2><br />
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile Phone</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map(user => (
                                <tr key={user.email}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.role}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No users found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <button className="btn btn-secondary mt-3" onClick={handleBack}>Back</button>
        </div>
    );
}

export default Dashboard;
