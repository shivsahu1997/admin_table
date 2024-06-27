import React from 'react';

import "./table.css"


const Table = ({ handleDesignationFilter, handleStatusFilter, filteredData }) => {
  return (
    <div className="container ">
      <label htmlFor="designationFilter">Filter by Designation:</label>
      <select id="designationFilter" onChange={handleDesignationFilter}>
        <option value="">All</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>

      <label htmlFor="statusFilter">Filter by Access Status:</label>
      <select id="statusFilter" onChange={handleStatusFilter}>
        <option value="">All</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <div className='table-responsive'>
        <table >
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Designation</th>
              <th>Access Status</th>
              <th>User ID</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.designation}</td>
                <td>{item.accessStatus}</td>
                <td>{item.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;