import React from 'react'

const Home = () => {
  return (
    <>
    <div className="container my-4">
      <div className="row d-flex justify-content-around px-2">
        <div className="mx-lg-2 mx-md-1 my-2 col-sm-6 col-lg-3 col-md-4 border shadow px-3 py-2">
          <h3 className='text-center'>Admin</h3>
          <hr />
          <p className='fw-bold'>Total: 255</p>
        </div>
        <div className="mx-lg-2 mx-md-1 my-2 col-sm-6 col-lg-3 col-md-4 border shadow px-3 py-2">
          <h3 className='text-center'>Employees</h3>
          <hr />
          <p className='fw-bold'>Total: 255</p>
        </div>
        <div className="mx-lg-2 mx-md-1 my-2 col-sm-6 col-lg-3 col-md-4 border shadow px-3 py-2">
          <h3 className='text-center'>Salary</h3>
          <hr />
          <p className='fw-bold'>Total: 255</p>
        </div>
      </div>
      <div className="row p-3 mt-5">
      <h2 className='text-center text-secondary'>List of Admins</h2>
      <div className="col-lg-10 col-12 my-2 mx-auto">

  
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Talha</td>
      <td>talha123@gmail.com</td>
      <td>
      <button className='btn btn-danger'>Delete</button>
      </td>
    </tr>
  </tbody>
</table>
      </div>
      </div>
    </div>
    </>
  )
}

export default Home