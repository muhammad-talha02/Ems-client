import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { PlusCircleFill } from 'react-bootstrap-icons'
const Employee = () => {
  return (
    <>
      <h2 className='text-center text-secondary my-3'>List of Employees</h2>
      <div className="container p-3">
          <Link to='/employee/create' className='btn btn-success'>Add Employee <PlusCircleFill/></Link>
        <div className="">
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Employee