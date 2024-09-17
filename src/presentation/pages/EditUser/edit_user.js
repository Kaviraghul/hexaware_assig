import { useLocation, useNavigate } from "react-router-dom";
import "./edit_user.css";
import { useState } from "react";
import { editEmployee } from "../../../services/firebase_employee_services";

export default function EditUserScreen(){

    
    const location = useLocation();
    const { employee } = location.state || {};
    const navigate = useNavigate();
    
    const [employeeDetails, setEmployeeDetails] = useState({
        firstName: employee.firstName,
        secondName: employee.secondName,
        gender: employee.gender,
        location: employee.location
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployeeDetails((prevEmployee) => ({
            ...prevEmployee,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await editEmployee( employee.id, employeeDetails);
            console.log("Employee details updated successfully!");
            navigate(-1);
        } catch (error) {
            console.error("Error updating employee details: ", error);
        }
    };

    const handleCancel = async (e) => {
        navigate(-1);
    }

    return (
        <div className="edit-employee-details-wrapper" >
            {employee && (
                <div className="modal-content">
                <h2>Edit Employee Details</h2>
                <form className="new-employee-form" onSubmit={handleSubmit}>
                    <div className="new-employee-form-fields" >
                        <label className="new-employee-form-field-label">First Name:</label>
                        <br/>
                        <input
                            className = "modal-input-field"
                            type="text"
                            name="firstName"
                            value={employeeDetails.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="new-employee-form-fields">
                        <label className="new-employee-form-field-label">Second Name:</label>
                        <br/>
                        <input
                            className = "modal-input-field"
                            type="text"
                            name="secondName"
                            value={employeeDetails.secondName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="new-employee-form-fields">
                        <label className="new-employee-form-field-label">Gender:</label>
                        <br/>
                        <select
                            name="gender"
                            value={employeeDetails.gender}
                            onChange={handleInputChange}
                            required
                            className = "modal-gender-input-field"
                        >
                            <option value="" disabled>Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="new-employee-form-fields">
                        <label className="new-employee-form-field-label">Location:</label>
                        <br/>
                        <input
                            className = "modal-input-field"
                            type="text"
                            name="location"
                            value={employeeDetails.location}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="modal-actions">
                        <button className="save-user-btn" type="submit">Save</button>
                        <button className="cancel-user-btn" type="button" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
            )}
        </div>
    );
}