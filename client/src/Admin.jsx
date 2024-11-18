
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Admin.css'; // Import the CSS file

// const AdminHomePage = () => {
//     const navigate = useNavigate();

//     const handleNavigate = (path) => {
//         navigate(path); // Navigate to the specified path
//     };

//     return (
//         <div className="admin-dashboard">
//             <h1>Welcome to the Admin Dashboard</h1>
//             <div className="dashboard-card-container">
//                 <div className="dashboard-card" onClick={() => handleNavigate('/admin/orderdetails')}>
//                     <div className="dashboard-card-icon">📋</div>
//                     <div className="dashboard-card-title">Orders Details</div>
//                     <div className="dashboard-card-description">View and manage all orders.</div>
//                 </div>
//                 <div className="dashboard-card" onClick={() => handleNavigate('/admin/admincustom')}>
//                     <div className="dashboard-card-icon">🎂</div>
//                     <div className="dashboard-card-title">Customization Cakes</div>
//                     <div className="dashboard-card-description">Manage customization details.</div>
//                 </div>
//                 <div className="dashboard-card" onClick={() => handleNavigate('/admin/productdetails')}>
//                     <div className="dashboard-card-icon">🛒</div>
//                     <div className="dashboard-card-title">Add Product</div>
//                     <div className="dashboard-card-description">Add new products to the inventory.</div>
//                 </div>
//                 <div className="dashboard-card" onClick={() => handleNavigate('/admin/customer')}>
//                     <div className="dashboard-card-icon">👥</div>
//                     <div className="dashboard-card-title">Customers Details</div>
//                     <div className="dashboard-card-description">Manage customer information.</div>
//                 </div>
//                 <div className="dashboard-card" onClick={() => handleNavigate('/admin/sales')}>
//                     <div className="dashboard-card-icon">📈</div>
//                     <div className="dashboard-card-title">Sales Report</div>
//                     <div className="dashboard-card-description">View sales reports and analytics.</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminHomePage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css'; // Import the CSS file

const AdminHomePage = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path); // Navigate to the specified path
    };

    const handleLogout = () => {
        // Here you can clear any authentication tokens or session info
        // localStorage.removeItem('token'); // Example: Remove token
        navigate('/login'); // Navigate to the login page
    };

    return (
        <div className="admin-dashboard">
            <h1>Welcome to the Admin Dashboard</h1>
            <div className="dashboard-buttons-container">
                <div className="dashboard-card-container">
                    <div className="dashboard-card" onClick={() => handleNavigate('/admin/orderdetails')}>
                        <div className="dashboard-card-icon">📋</div>
                        <div className="dashboard-card-title">Orders Details</div>
                        <div className="dashboard-card-description">View and manage all orders.</div>
                    </div>
                    <div className="dashboard-card" onClick={() => handleNavigate('/admin/admincustom')}>
                        <div className="dashboard-card-icon">🎂</div>
                        <div className="dashboard-card-title">Customization Cakes</div>
                        <div className="dashboard-card-description">Manage customization details.</div>
                    </div>
                    <div className="dashboard-card" onClick={() => handleNavigate('/admin/productdetails')}>
                        <div className="dashboard-card-icon">🛒</div>
                        <div className="dashboard-card-title">Add Product</div>
                        <div className="dashboard-card-description">Add new products to the inventory.</div>
                    </div>
                    <div className="dashboard-card" onClick={() => handleNavigate('/admin/customer')}>
                        <div className="dashboard-card-icon">👥</div>
                        <div className="dashboard-card-title">Customers Details</div>
                        <div className="dashboard-card-description">Manage customer information.</div>
                    </div>
                    <div className="dashboard-card" onClick={() => handleNavigate('/admin/sales')}>
                        <div className="dashboard-card-icon">📈</div>
                        <div className="dashboard-card-title">Sales Report</div>
                        <div className="dashboard-card-description">View sales reports and analytics.</div>
                    </div>
                    <div className="dashboard-card" onClick={() => handleNavigate('/admin/ReviewAdmin')}>
                        <div className="dashboard-card-icon">📈</div>
                        <div className="dashboard-card-title">Review</div>
                        <div className="dashboard-card-description">View the review and suggestion of the customer</div>
                    </div>
                </div>

                {/* Add Home and Log Out buttons */}
                <div className="admin-footer">
                    <button className="btn btn-home" onClick={() => handleNavigate('/')}>Home Page</button>
                    <button className="btn btn-logout" onClick={handleLogout}>Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default AdminHomePage;
