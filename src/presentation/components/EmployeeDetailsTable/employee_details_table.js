import React from 'react';
import './employee_details_table.css';

export default function EmployeeTable({ employees }) {

  const handleEdit = (id) => {
    console.log(`Edit employee with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete employee with ID: ${id}`);
  };

  return (
    <div className='employee-table-wrapper'>
      {employees.length === 0 && (
        <img className='no-data-img' src='assets/png/no_data.png' alt="No data" />
      )}
      {employees.length > 0 && (
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
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className='employee-detail-tile-item'>{employee.firstName}</td>
                <td className='employee-detail-tile-item'>{employee.secondName}</td>
                <td className='employee-detail-tile-item'>{employee.gender}</td>
                <td className='employee-detail-tile-item'>{employee.location}</td>
                <td className='employee-detail-tile-item'>
                  <button
                    className='employee-detail-edit-btn'
                    onClick={() => handleEdit(employee.id)}
                  >
                    Edit
                  </button>
                  <button
                    className='employee-detail-delete-btn'
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
