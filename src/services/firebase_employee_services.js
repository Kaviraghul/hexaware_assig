import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const collectionName = 'employees';

export const getEmployees = async () => {
  const employeeCollection = collection(db, collectionName);
  const employeeSnapshot = await getDocs(employeeCollection);
  return employeeSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addEmployee = (employee) => addDoc(collection(db, collectionName), employee);

export const editEmployee = (id, updatedEmployee) => {
  const employeeDoc = doc(db, collectionName, id);
  return updateDoc(employeeDoc, updatedEmployee);
};

export const deleteEmployee = (id) => deleteDoc(doc(db, collectionName, id));

export const getEmployeeById = async (id) => {
  const employeeDoc = await getDoc(doc(db, collectionName, id));
  if (employeeDoc.exists()) {
    return { id: employeeDoc.id, ...employeeDoc.data() };
  } else {
    throw new Error("Employee not found");
  }
};
