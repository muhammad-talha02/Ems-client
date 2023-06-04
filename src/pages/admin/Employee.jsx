import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { PlusCircleFill } from 'react-bootstrap-icons'
import axios from 'axios';
const Employee = () => {
const [employees, setEmployees] = useState([])

  useEffect(()=>{
console.log("useeffect");
getAllEmployees()
  }, []);

  const getAllEmployees = ()=>{
    axios.get("http://localhost:8000/employees").then((res)=>{
      if(res.data.Status === 'Success'){

        setEmployees(res.data.result)
        console.log(res)
      }
    }).catch((err)=> console.log(err))
  }
  return (
    <>
      <h2 className='text-center text-secondary my-3'>List of Employees</h2>
      <div className="container p-3">
        <Link to='/employee/create' className='btn btn-success'>Add Employee <PlusCircleFill /></Link>
        <div className="row my-4">
          <div className="col-lg-10 col-12 my-2 mx-auto">


            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Salary</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
              {
               employees.length > 0 ? employees.map(emp=>{
                  return <tr key={emp.id}>
                    <td>
                      <img className='emp-img' src={`http://localhost:8000/images/${emp.image}`} alt="" />
                    </td>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.address}</td>
                    <td>{emp.salary}</td>
                    <td>
                    <button className='btn btn-primary btn-sm me-2'>Edit</button>
                    <button className='btn btn-danger btn-sm'>Delete</button>
                  </td>
                  </tr>
                }) : <h4 colspan="4" className='text-center'>Not Found</h4>
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Employee