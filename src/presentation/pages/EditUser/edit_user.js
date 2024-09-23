import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {  getEmployeeById } from "../../../services/firebase_employee_services";
import { EmployeeDetailsForm } from "../../components/components";
import "./edit_user.css";

export default function EditEmployee() {
   const { employeeId } = useParams();

  const [employeeDetails, setEmployeeDetails] = useState({
    firstName: '',
    secondName: '',
    gender: '',
    location: ''
  });

  useEffect(() => {
    const fetchEmployee = async () => { 
      try {
        const employee = await getEmployeeById(employeeId);
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
  }, [employeeId]);

  return (
    <div className="edit-employee-details-wrapper">
      <EmployeeDetailsForm existingEmployeeId={employeeId} existingEmployee={employeeDetails} />
    </div>
  );
}
