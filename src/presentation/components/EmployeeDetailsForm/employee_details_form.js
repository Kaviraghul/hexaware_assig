import { useEffect, useState } from "react";
import { addEmployee, editEmployee } from "../../../services/firebase_employee_services";
import { useNavigate } from "react-router-dom";
import "./employee_details_form.css";

export default function EmployeeDetailsForm({ existingEmployee, existingEmployeeId, closeModal}) {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        firstName: "",
        secondName: "",
        gender: "",
        location: ""
    });

    useEffect(() => {
        if (existingEmployee) {
            setEmployee({
                firstName: existingEmployee.firstName,
                secondName: existingEmployee.secondName,
                gender: existingEmployee.gender,
                location: existingEmployee.location
            });
        }
    }, [existingEmployee]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            existingEmployee ? await editEmployee(existingEmployeeId, employee) : await addEmployee(employee);
            console.log("Employee added successfully");
        } catch (error) {
            console.log("Error adding employee:", error.message);
        }


        setEmployee({              
            firstName: "",
            secondName: "",
            gender: "",
            location: ""
        });

        existingEmployee ? navigate(-1) : closeModal();
    };

    const handleCancel = async (e) => {
        existingEmployee ? navigate(-1) : closeModal();
    }

  return (
    <div className="modal">
      <h2 className="employee-details-form-header">
        {existingEmployee ? "Edit Employee Details" : "New Employee Details"}
      </h2>
      <form className="new-employee-form" onSubmit={handleSubmit}>
        <div className="new-employee-form-fields">
          <label className="new-employee-form-field-label">First Name:</label>
          <br />
          <input
            className="input-field"
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="new-employee-form-fields">
          <label className="new-employee-form-field-label">Second Name:</label>
          <br />
          <input
            className="input-field"
            type="text"
            name="secondName"
            value={employee.secondName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="new-employee-form-fields">
          <label className="new-employee-form-field-label">Gender:</label>
          <br />
          <select
            name="gender"
            value={employee.gender}
            onChange={handleInputChange}
            required
            className="gender-select"
          >
            <option value="" disabled>
              Select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="new-employee-form-fields">
          <label className="new-employee-form-field-label">Location:</label>
          <br />
          <input
            className="input-field"
            type="text"
            name="location"
            value={employee.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="modal-actions">
          <button className="save-btn" type="submit">
            Save
          </button>
          <button className="cancel-btn" type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}