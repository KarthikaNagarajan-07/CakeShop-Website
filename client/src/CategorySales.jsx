import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './cat.css'; // Updated CSS file import

const FlavorSalesReport = () => {
    const [salesData, setSalesData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [flavorSearch, setFlavorSearch] = useState('');
    const [searchTriggered, setSearchTriggered] = useState(false); // Track if search was triggered

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/admin/sales'); // Navigate back to the admin page
    };

    useEffect(() => {
        if (searchTriggered && flavorSearch) {
            fetchOrders();
        }
    }, [searchTriggered, flavorSearch]);

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3001/api/orders', { withCredentials: true });
            const orders = response.data;
            const filteredOrders = filterOrdersByFlavor(orders, flavorSearch);
            const salesByFlavor = calculateSalesByFlavor(filteredOrders);
            setSalesData(salesByFlavor);
        } catch (error) {
            setError('Error fetching orders: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const filterOrdersByFlavor = (orders, searchFlavor) => {
        return orders.filter(order => 
            order.flavor && // Ensure the flavor field exists
            order.flavor.toLowerCase().includes(searchFlavor.toLowerCase())
        );
    };

    const calculateSalesByFlavor = (orders) => {
        const sales = {};
        orders.forEach(order => {
            const { flavor, quantity } = order;
            if (!sales[flavor]) {
                sales[flavor] = 0;
            }
            sales[flavor] += quantity;
        });
        return sales;
    };

    const handleFlavorSearch = (e) => {
        setFlavorSearch(e.target.value);
    };

    const handleSearchClick = () => {
        setSearchTriggered(true); // Set searchTriggered to true when search button is clicked
        fetchOrders();
    };

    return (
        <div className="report-container">
            <h1>Flavor Sales Report</h1>
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <label>
                    Search Flavor:
                    <input 
                        type="text" 
                        value={flavorSearch} 
                        onChange={handleFlavorSearch} 
                        placeholder="Enter flavor"
                    />
                </label>
                <button type="button" onClick={handleSearchClick}>Search</button>
            </form>
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            {searchTriggered && Object.keys(salesData).length > 0 && (
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Flavor</th>
                                <th>Total Quantity Sold</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(salesData).map(([flavor, totalQuantity]) => (
                                <tr key={flavor}>
                                    <td>{flavor}</td>
                                    <td>{totalQuantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {searchTriggered && Object.keys(salesData).length === 0 && (
                <p className="no-results">No results found for "{flavorSearch}".</p>
            )}
            <button className="back-button" onClick={handleBack}>Back</button>
        </div>
    );
};

export default FlavorSalesReport;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const DessertsSalesReport = () => {
//     const [salesData, setSalesData] = useState({});
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [dessertSearch, setDessertSearch] = useState('');
//     const [searchTriggered, setSearchTriggered] = useState(false);

//     const navigate = useNavigate();

//     const handleBack = () => {
//         navigate('/admin'); // Navigate back to the admin page
//     };

//     useEffect(() => {
//         if (searchTriggered && dessertSearch) {
//             fetchOrders();
//         }
//     }, [searchTriggered, dessertSearch]);

//     const fetchOrders = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.get('http://localhost:3001/api/orders', { withCredentials: true });
//             const orders = response.data;
//             const filteredOrders = filterOrdersByDessert(orders, dessertSearch);
//             const salesByDessert = calculateSalesByDessert(filteredOrders);
//             setSalesData(salesByDessert);
//         } catch (error) {
//             setError('Error fetching orders: ' + error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const filterOrdersByDessert = (orders, searchDessert) => {
//         if (!searchDessert) {
//             return orders; // Return all orders if no search term
//         }
//         return orders.filter(order => 
//             order.dessert && // Ensure the dessert field exists
//             order.dessert.toLowerCase().includes(searchDessert.toLowerCase())
//         );
//     };

//     const calculateSalesByDessert = (orders) => {
//         const sales = {};
//         orders.forEach(order => {
//             const { dessert, quantity } = order;
//             if (!sales[dessert]) {
//                 sales[dessert] = 0;
//             }
//             sales[dessert] += quantity;
//         });
//         return sales;
//     };

//     const handleDessertSearch = (e) => {
//         setDessertSearch(e.target.value);
//     };

//     const handleSearchClick = () => {
//         setSearchTriggered(true); // Set searchTriggered to true when search button is clicked
//         fetchOrders();
//     };

//     return (
//         <div>
//             <h1>Desserts Sales Report</h1>
//             <form onSubmit={(e) => e.preventDefault()}>
//                 <label>
//                     Search Dessert:
//                     <input 
//                         type="text" 
//                         value={dessertSearch} 
//                         onChange={handleDessertSearch} 
//                         placeholder="Enter dessert type"
//                     />
//                 </label>
//                 <button type="button" onClick={handleSearchClick}>Search</button>
//             </form><br/><br/>
//             {loading && <p>Loading...</p>}
//             {error && <p>{error}</p>}
//             {searchTriggered && Object.keys(salesData).length > 0 ? (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Dessert Type</th>
//                             <th>Total Quantity Sold</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Object.entries(salesData).map(([dessert, totalQuantity]) => (
//                             <tr key={dessert}>
//                                 <td>{dessert}</td>
//                                 <td>{totalQuantity}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 searchTriggered && <p>No results found for "{dessertSearch}".</p>
//             )}
            
//             <button className="button12" onClick={handleBack}>Back</button>
//         </div>
//     );
// };

// export default DessertsSalesReport;
