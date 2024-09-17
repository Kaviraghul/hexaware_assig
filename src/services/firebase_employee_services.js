import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const getEmployees = async () => {
  const employeeCollection = collection(db, 'employees');
  const employeeSnapshot = await getDocs(employeeCollection);
  return employeeSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addEmployee = (employee) => addDoc(collection(db, 'employees'), employee);

export const editEmployee = (id, updatedEmployee) => {
  const employeeDoc = doc(db, 'employees', id);
  return updateDoc(employeeDoc, updatedEmployee);
};

export const deleteEmployee = (id) => deleteDoc(doc(db, 'employees', id));

export const getEmployeeById = async (id) => {
  const employeeDoc = await getDoc(doc(db, "employees", id));
  if (employeeDoc.exists()) {
    return { id: employeeDoc.id, ...employeeDoc.data() };
  } else {
    throw new Error("Employee not found");
  }
};
