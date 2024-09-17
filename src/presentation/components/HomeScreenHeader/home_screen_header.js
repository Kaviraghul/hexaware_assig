import React, { useState } from "react";
import "./home_screen_header.css"; // Optional for styling the modal
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

export default function HomeScreenHeader() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [employee, setEmployee] = useState({
        firstName: "",
        secondName: "",
        gender: "",
        location: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("New Employee:", employee);
    
        try {
            await addDoc(collection(db, 'employees'), {
                firstName: employee.firstName,
                secondName: employee.secondName,
                gender: employee.gender,
                location: employee.location,
                createdAt: new Date() 
            });
            
            console.log("Employee added successfully");
        } catch (error) {
            console.log("Error adding employee:", error.message);
        }
    
        setIsModalVisible(false);  
        setEmployee({              
            firstName: "",
            secondName: "",
            gender: "",
            location: ""
        });
    };
    

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false); 
    };

    return (
        <div className="home-screen-header-wrapper">
            <h1>Employee Details</h1>
            <button onClick={openModal} className="new_employee-submit">
                + New Employee
            </button>

            {isModalVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>New Employee Details</h2>
                        <form className="new-employee-form" onSubmit={handleSubmit}>
                            <div className="new-employee-form-fields" >
                                <label className="new-employee-form-field-label">First Name:</label>
                                <br/>
                                <input
                                    className = "modal-input-field"
                                    type="text"
                                    name="firstName"
                                    value={employee.firstName}
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
                                    value={employee.secondName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="new-employee-form-fields">
                                <label className="new-employee-form-field-label">Gender:</label>
                                <br/>
                                <select
                                    name="gender"
                                    value={employee.gender}
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
                                    value={employee.location}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="modal-actions">
                                <button className="save-user-btn" type="submit">Save</button>
                                <button className="cancel-user-btn" type="button" onClick={closeModal}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
