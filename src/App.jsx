import React from 'react'
import Login from './pages/Login'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Employee from './pages/admin/Employee'
import Profile from './pages/admin/Profile'
import Home from './pages/admin/Home'
import AddEmployee from './pages/admin/employee/AddEmployee'
import EditEmployee from './pages/admin/employee/EditEmployee'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path='' element={<Home />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/employee/create' element={<AddEmployee/>} />
          <Route path='/employee/edit/:id' element={<EditEmployee/>} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
