import React, { useState } from 'react'
import axios from 'axios';
const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    image: {},
    salary:""
  });
  console.log(employee)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", employee.name);
    formdata.append("email", employee.email);
    formdata.append("password", employee.password);
    formdata.append("address", employee.address);
    formdata.append("salary", employee.salary);
    formdata.append("image", employee.image);
    console.log(formdata)
    console.log(employee)
    axios.post("http://localhost:8000/create", formdata).then((res) => {
      console.log("res", res)
    }).catch((err) => console.log(err))
  }
  return (
    <div className='container my-5'>
      <h2 className='text-center text-secondary my-2'>Add Employee</h2>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" name='name' id="name" onChange={handleChange} placeholder='Enter Name' />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" name='email' id="email" onChange={handleChange} aria-describedby="emailHelp" placeholder='Enter Email' />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" name='password' id="password" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="salary" className="form-label">Salary</label>
              <input type="number" className="form-control" name='salary' id="salary" onChange={handleChange} placeholder='Enter Salary' />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" name='address' id="address" onChange={handleChange} placeholder='Enter Address' />
            </div>
            <div className="mb-3">
              <label htmlFor="img" className="form-label" >Select Image</label>
              <input type='file' className="form-control" id="img" name='image' onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })} placeholder='Enter Email' />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddEmployee