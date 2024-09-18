import useEmployee from "../../../context_providers/employee_provider";
import EmployeeTable from "../../components/EmployeeDetailsTable/employee_details_table";
import HomeScreenHeader from "../../components/HomeScreenHeader/home_screen_header";
import HomeSideDraw from "../../components/HomeSideDraw/home_side_draw";
import axios from 'axios';
import "./home.css";
import { useEffect } from "react";

export default function HomeScreen() {
  const { employees } = useEmployee();

  const options = {
    method: 'GET',
    url: 'https://irctc1.p.rapidapi.com/api/v1/searchStation',
    params: { query: 'BJU' },
    headers: {
      'x-rapidapi-key': '68a0a40004mshd8022891a5d7ef8p18d7f5jsn4fbbe007e598',
      'x-rapidapi-host': 'irctc1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="home-screen-wrapper">
      <HomeSideDraw />
      <div className="home-screen-section">
        <HomeScreenHeader />
        <EmployeeTable employees={employees} />
      </div>
    </div>
  );
}
