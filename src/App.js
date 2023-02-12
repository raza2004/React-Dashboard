import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';

import './App.css';
import Orders from './pages/Orders';
import AdminAuth from './components/Auth/AdminAuth/AdminAuth';
import AddProduct from './components/createProduct/CreateProduct';
import Login from './components/Auth/user/Login';
import Register from './components/Auth/user/Register';
import Home from './components/Auth/user/Dashboard';

function App () {
  return(
    <Router>
      <div className='dashboard-container'>
        
          
          <div className='dashboard-body'>
              <Routes>

              <Route exact path="/" element={<Login/>} />
              <Route exact path="/home" element={<Home/>} />
              <Route exact path="/register" element={<Register/>} />
                <Route path="admin/login" element ={<AdminAuth/>}/>
                  <Route path="*" element={<div></div>} />
                  <Route exact path="admin/Dashboard" element={<SideBar menu={sidebar_menu} />} />
                  <Route exact path="/" element={<SideBar menu={sidebar_menu} />} />
                  <Route exact path="/orders" element={< Orders/>} />
                  <Route exact path="/products" element={<AddProduct/>} />
                  <Route exact path="/profile" element={<div></div>} />
              </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App;