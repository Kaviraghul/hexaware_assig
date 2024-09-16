import React, { useState } from 'react';
import './employee_details_table.css';

export default function EmployeeTable() {
  
  const [employees, setEmployees] = useState([
    { id: 1, firstName: 'John', secondName: 'Doe', gender: 'Male', location: 'New York' },
    { id: 2, firstName: 'Jane', secondName: 'Smith', gender: 'Female', location: 'Los Angeles' }
  ]);

  
  const handleEdit = (id) => {
    console.log(`Edit employee with ID: ${id}`);
    
  };

  
  const handleDelete = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  return (
    <div className='employee-table-wrapper'>
      <table className="employee-table">
        <thead>
          <tr>
            <th className='employee-detail-column-title'>First Name</th>
            <th className='employee-detail-column-title'>Second Name</th>
            <th className='employee-detail-column-title'>Gender</th>
            <th className='employee-detail-column-title'>Location</th>
            <th className='employee-detail-column-title'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td className='employee-detail-tile-item'>{employee.firstName}</td>
              <td className='employee-detail-tile-item'>{employee.secondName}</td>
              <td className='employee-detail-tile-item'>{employee.gender}</td>
              <td className='employee-detail-tile-item'>{employee.location}</td>
              <td className='employee-detail-tile-item'>
                <button className='employee-detail-edit-btn' onClick={() => handleEdit(employee.id)}>Edit</button>
                
                <button className='employee-detail-delete-btn' onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
