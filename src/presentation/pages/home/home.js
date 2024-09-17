import EmployeeTable from '../../components/EmployeeDetailsTable/employee_details_table';
import HomeScreenHeader from '../../components/HomeScreenHeader/home_screen_header';
import HomeSideDraw from '../../components/HomeSideDraw/home_side_draw';
import './home.css';

export default function HomeScreen(){
    
    return<div className="home-screen-wrapper" >
      <HomeSideDraw />
      <div className='home-screen-section' >
        <HomeScreenHeader />
        <EmployeeTable />
      </div>
    </div>
} 