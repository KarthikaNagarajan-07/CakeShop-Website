import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from "./Signup"
import Login from "./Login"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Customer from './Customer'
import Home from './Home'
import BestSeller from './BestSeller'
import ThemeCakes from './ThemeCakes'
import Birthday from './Birthday'
import OrderPage from "./Order"
import WeddingCakes from "./WeddingCakes"
import { CartProvider } from './CartContext';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import PlaceOrder from './PlaceOrder';
import Admin from './Admin';
import OrderDetails from './OrderDetails';
import Settings from './Settings';
import Aboutus from './Aboutus';
import Customization from './Customization';
import AdminCustom from './AdminCustom';
import Dessert from './Dessert';
import Brownie from './Brownie';
import CupCakes from './CupCakes';
import Cookies from './Cookies';
import PieceCakes from './PieceCakes';
import Payment from './OrderPayment';
import ProductDetailsAdmin from './ProductDetailsAdmin';
import AdminWeeklyReport from './AdminWeeklyReport';
import EditPage from './EditPage';
import ProductList from './ProductList';
import SalesReportPage from './SalesReportPage';
import Report from './Report';
import CategorySalesReport from './CategorySales';
import ItemSalesReport from './ItemSalesReport';
import Review from './Review';
import ReviewAdmin from './ReviewAdmin';


function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/admin/customer" element={<Customer />}></Route>
        <Route path="/admin/orderdetails" element={<OrderDetails />}></Route>
        <Route path="/admin/settings" element={<Settings />}></Route>
        <Route path="/admin/admincustom" element={<AdminCustom />}></Route>
        <Route path="/admin/productdetails" element={<ProductDetailsAdmin />}></Route>
        <Route path='/admin/weekly' element={<AdminWeeklyReport />}></Route>
        <Route path="/admin/edit-product" elemnt={<EditPage/>}></Route>
        <Route path="/BestSeller" element={<BestSeller />}></Route>
        <Route path="/ThemeCakes" element={<ThemeCakes />}></Route>
        <Route path="/Birthday" element={<Birthday />}></Route>
        <Route path="/WeddingCakes" element={<WeddingCakes />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/placeorder" element={<PlaceOrder />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/custom" element={<Customization />}></Route>
        <Route path="/dessert" element={<Dessert />}></Route>
        <Route path="/brownie" element={<Brownie />}></Route>
        <Route path="/cupcakes" element={<CupCakes />}></Route>
        <Route path="/cookies" element={<Cookies />}></Route>
        <Route path="/piececakes" element={<PieceCakes />}></Route>
        <Route path="/order-success" element={<Payment />}></Route>
        <Route path="/products" element={<ProductList />} />
        <Route path="/admin/sales" element={<SalesReportPage />} />
        <Route path="/admin/sales/weekly" element={<AdminWeeklyReport />} /> 
        <Route path="/admin/sales/categories" element={<CategorySalesReport />} />
        <Route path="/admin/sales/report" element={<Report />} />  
        <Route path="/admin/sales/item" element={<ItemSalesReport />} />
        <Route path="/admin/ReviewAdmin" element={<ReviewAdmin />} />  
        <Route path="/review" element={<Review />} />
      </Routes>
      </BrowserRouter>
      </CartProvider>
  )
}

export default App
