// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const SalesReportPage = () => {
//     const navigate = useNavigate();

//     const handleNavigateToWeeklyReport = () => {
//         navigate('/admin/sales/report');
//     };

//     const handleNavigateToCategoriesReport = () => {
//         navigate('/admin/sales/categories');
//     };

//     const handleNavigateToSalesReport = () => {
//         navigate('/admin/sales/weekly');
//     };

//     const handleNavigateToItemSalesReport = () => {
//         navigate('/admin/sales/item');
//     };


//     return (
//         <div className="sales-report-page">
//             <h1>Sales Report</h1>
//             <div className="sales-report-buttons">
//                 <button onClick={handleNavigateToWeeklyReport}>Weekly Report</button>
//                 <button onClick={handleNavigateToCategoriesReport}>Cake Flavours Report</button>
//                 <button onClick={handleNavigateToSalesReport}>Sales Report</button>
//                 <button onClick={handleNavigateToItemSalesReport}>Item Sales Report</button>
//             </div>
//         </div>
//     );
// };

// export default SalesReportPage;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SalesReportPage.css'; // Import the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';


const SalesReportPage = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleBack = () => {
        navigate('/admin'); // Navigate to the previous page
    };

    return (
        <div className="sales-report-page">
            
            <h1>Sales Report</h1>
            <div className="sales-report-buttons">
                <div 
                  className="sales-report-button-card"
                  onClick={() => handleNavigate('/admin/sales/report')}
                >
                    <i className="fas fa-calendar-week"></i>
                    <p>Weekly Report</p>
                </div>
                <div 
                  className="sales-report-button-card"
                  onClick={() => handleNavigate('/admin/sales/categories')}
                >
                    <i className="fas fa-cake"></i>
                    <p>Cake Flavours Report</p>
                </div>
                <div 
                  className="sales-report-button-card"
                  onClick={() => handleNavigate('/admin/sales/weekly')}
                >
                    <i className="fas fa-chart-line"></i>
                    <p>Sales Report</p>
                </div>
                <div 
                  className="sales-report-button-card"
                  onClick={() => handleNavigate('/admin/sales/item')}
                >
                    <i className="fas fa-box"></i>
                    <p>Item Sales Report</p>
                </div>
                
            </div>
            <button className="back-button" onClick={handleBack}>
                 Back
            </button>
        </div>
    );
};

export default SalesReportPage;


