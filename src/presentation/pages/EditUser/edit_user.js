import {  useParams } from "react-router-dom";
import "./edit_user.css";
import { useEffect, useState } from "react";
import {  getEmployeeById } from "../../../services/firebase_employee_services";
import EmployeeDetailsForm from "../../components/EmployeeDetailsForm/employee_details_form";

export default function EditEmployee() {
   const { id } = useParams();

  const [employeeDetails, setEmployeeDetails] = useState({
    firstName: '',
    secondName: '',
    gender: '',
    location: ''
  });

  useEffect(() => {
    const fetchEmployee = async () => { 
      try {
        const employee = await getEmployeeById(id);
        setEmployeeDetails({
          firstName: employee.firstName,
          secondName: employee.secondName,
          gender: employee.gender,
          location: employee.location
        });
      } catch (error) {
        console.error("Error fetching employee details: ", error);
      }
    };

    fetchEmployee();
  }, [id]);

  return (
    <div className="edit-employee-details-wrapper">
      <EmployeeDetailsForm existingEmployeeId={id} existingEmployee={employeeDetails} />
    </div>
  );
}
