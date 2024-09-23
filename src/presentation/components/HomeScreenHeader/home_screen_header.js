import React, { useState } from "react";
import "./home_screen_header.css";
import { EmployeeDetailsForm } from "../components";

export default function HomeScreenHeader() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false); 
    };

    return (
        <div className="home-screen-header">
            <h1>Employee Details</h1>
            <button onClick={openModal} className="new-employee-btn">
                + New Employee
            </button>

            {isModalVisible && (
                <div className="modal-overlay">
                    <EmployeeDetailsForm closeModal={closeModal} />
                </div>
            )}
        </div>
    );
}
