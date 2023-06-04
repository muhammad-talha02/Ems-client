import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const EditEmployee = () => {
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        salary: ""
    });
    const params = useParams()
    const id = params.id;
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value })
    }

    useEffect(() => {
        getEmployee()
    }, [])
    const getEmployee = () => {
        axios.get(`http://localhost:8000/employee/${id}`).then((res) => {
            if (res.data.Status === 'Success') {
                setEmployee(res.data.result[0])
            }
        }).catch((err) => console.log(err))
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/employee/${id}`, employee).then((res) => {
            if (res.data.Status === 'Success') {
                navigate("/employee")
            }
        }).catch((err) => console.log(err))
    }
    return (
        <div className='container my-5'>
            <h2 className='text-center text-secondary my-2'>Update Employee</h2>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <form onSubmit={handleUpdate}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" name='name' id="name" value={employee.name} onChange={handleChange} placeholder='Enter Name' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name='email' id="email" value={employee.email} onChange={handleChange} aria-describedby="emailHelp" placeholder='Enter Email' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="salary" className="form-label">Salary</label>
                            <input type="number" className="form-control" name='salary' id="salary" value={employee.salary} onChange={handleChange} placeholder='Enter Salary' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" name='address' id="address" value={employee.address} onChange={handleChange} placeholder='Enter Address' />
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditEmployee