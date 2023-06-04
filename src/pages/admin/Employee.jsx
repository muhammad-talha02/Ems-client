import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { PlusCircleFill } from 'react-bootstrap-icons'
import axios from 'axios';
const Employee = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    getAllEmployees()
  }, []);

  const getAllEmployees = () => {
    axios.get("http://localhost:8000/employees").then((res) => {
      if (res.data.Status === 'Success') {
        setEmployees(res.data.result)
      }
    }).catch((err) => console.log(err))
  }


  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/employee/${id}`).then((res) => {
      console.log(res)
      if (res.data.Status === 'Success') {
        getAllEmployees()
      }
    }).catch((err) => console.log(err))
  }
  return (
    <>
      <h2 className='text-center text-secondary my-3'>List of Employees</h2>
      <div className="container p-3">
        <Link to='/employee/create' className='btn btn-success'>Add Employee <PlusCircleFill /></Link>
        <div className="row my-4">
          <div className="col-lg-10 col-12 my-2 mx-auto">


            <table className="table">
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
                  employees.length > 0 ? employees.map(emp => {
                    return <tr key={emp.id}>
                      <td>
                        <img className='emp-img' src={`http://localhost:8000/images/${emp.image}`} alt="" />
                      </td>
                      <td>{emp.name}</td>
                      <td>{emp.email}</td>
                      <td>{emp.address}</td>
                      <td>{emp.salary}</td>
                      <td>
                        <Link to={`/employee/edit/${emp.id}`} className='btn btn-primary btn-sm me-2'>Edit</Link>
                        <button onClick={() => handleDelete(emp.id)} className='btn btn-danger btn-sm'>Delete</button>
                      </td>
                    </tr>
                  }) : <tr><td colSpan="6" className='text-center fw-bold'>Not Found</td></tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Employee