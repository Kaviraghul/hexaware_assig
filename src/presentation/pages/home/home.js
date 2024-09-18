import useEmployee from "../../../context_providers/employee_provider";
import EmployeeTable from "../../components/EmployeeDetailsTable/employee_details_table";
import HomeScreenHeader from "../../components/HomeScreenHeader/home_screen_header";
import HomeSideDraw from "../../components/HomeSideDraw/home_side_draw";

import "./home.css";
import { useState } from "react";

export default function HomeScreen() {
  const { employees } = useEmployee();
  const [selectedSection, setSelectedSection] = useState("Employee");

  const renderSection = () => {
    switch (selectedSection) {
      case "Dashboard":
        return <h2>Welcome to the Dashboard</h2>;
      case "Employee":
        return (
          <>
            <HomeScreenHeader />
            <EmployeeTable employees={employees} />
          </>
        );
      case "Calendar":
        return <h2>Calendar Section</h2>;
      case "Inbox":
        return <h2>Inbox Section</h2>;
      default:
        return <h2>Select a section</h2>;
    }
  };

  return (
    <div className="home-container">
      <HomeSideDraw setSelectedSection={setSelectedSection} />
      <div className="home-right-content">
        {renderSection()}
      </div>
    </div>
  );
}
