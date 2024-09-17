import { collection, onSnapshot } from 'firebase/firestore';
import EmployeeTable from '../../components/EmployeeDetailsTable/employee_details_table';
import HomeScreenHeader from '../../components/HomeScreenHeader/home_screen_header';
import HomeSideDraw from '../../components/HomeSideDraw/home_side_draw';
import './home.css';
import { useEffect , useState} from 'react';
import { db } from '../../../firebase/firebase';

export default function HomeScreen(){
    
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'employees'), (snapshot) => {
      const employeeData = snapshot.docs.map((doc) => {
        console.log("Document Data:", doc.data()); 
        return { id: doc.id, ...doc.data() };
      });

      setEmployees(employeeData);
    });

    return () => unsubscribe();
}, []);


 
    return<div className="home-screen-wrapper" >
      <HomeSideDraw />
      <div className='home-screen-section' >
        <HomeScreenHeader />
        <EmployeeTable employees={employees} />
      </div>
    </div>
} 