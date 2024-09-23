import { createContext, useState, useEffect, useContext } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase"; 

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "employees"), (snapshot) => {
      const employeeData = snapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data(),
      }));
      setEmployees(employeeData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <EmployeeContext.Provider value={{employees, setEmployees}}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default function useEmployee() {
  return useContext(EmployeeContext);
}
