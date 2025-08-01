import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Home from './Home';
import NonVeg from './NonVeg';
import Veg from './Veg';
import Fruits from './Fruits';
import Choclate from './Choclate';
import Cart from './Cart';
import Orders from './Orders';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Signing from './Signing';
import './Mystyles.css';
import Pagenotfound from './pagenotfound';
import SignUp from './SignUp';

function App() {
  const cart = useSelector((state) => state.cart);
  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);
  const currentUser = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
       <header className="navbar-top">
        <div className="logo">
          <h3>🛒 Fresh Mart</h3>
        </div>
        {isAuthenticated ? (
          <div className="user-info">
            <span>Welcome, {currentUser.userName}</span>
            <button onClick={() => dispatch(logout())}>Log Out</button>
          </div>
        ) : (
          <Link to="/Signing" className="button-link">Sign In</Link>
        )}
      </header>

      <nav className="navbar-bottom">
        <div className="navbar-links">
          <Link to="/Home" className="nav-link home-link">🏠 Home</Link>
          <Link to="/NonVeg" className="nav-link nonveg-link">🍗 Non-Veg</Link>
          <Link to="/Veg" className="nav-link veg-link">🥦 Veg</Link>
          <Link to="/Fruits" className="nav-link fruits-link">🍎 Fruits</Link>
          <Link to="/Chocolate" className="nav-link choc-link">🍫 Bakery</Link>
          <Link to="/Cart" className="nav-link cart-link">🛒 Cart ({totalCartCount})</Link>
          <Link to="/Orders" className="nav-link orders-link">📦 Orders</Link>
          <Link to="/AboutUs" className="nav-link about-link">ℹ About Us</Link>
          <Link to="/ContactUs" className="nav-link contact-link">📞 Contact Us</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/NonVeg" element={<NonVeg />} />
        <Route path="/Veg" element={<Veg />} />
        <Route path="/Fruits" element={<Fruits />} />
        <Route path="/Chocolate" element={<Choclate />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Signing" element={<Signing />} />
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path="/*" element={<Pagenotfound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
