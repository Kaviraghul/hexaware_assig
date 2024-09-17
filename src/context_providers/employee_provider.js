import { createContext, useState, useEffect, useContext } from "react";
import { getEmployees } from "../services/firebase_employee_services";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const employeeData = await getEmployees();
      setEmployees(employeeData);
    };
    fetchEmployees();
  }, []);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default function useEmployee() {
  return useContext(EmployeeContext);
}

