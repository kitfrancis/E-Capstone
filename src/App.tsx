import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Dashboard from "./student/student_view/studentDashboard";
import Navbar from "./student/navbar/navbar";
import StudentArchive from "./components/Archive";
import StudentProfile from "./student/student_view/studentProfile";
import Deliverablesbuttons from "./student/Dashboard_not_invited_student/Deliverablesbuttons";
import UploadButton from "./student/Dashboard_not_invited_student/uploadbutton";
import TaskButton from "./student/Dashboard_not_invited_student/taskbutton";
import DashboardNotInvited from "./student/student_view/studentDashboard_notInvited";
import Register from "./auth/Register";
import LandingPage from "./landingpage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
         <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* StudentPages */}
        <Route
           path="/dashboardnotinvited"
          element={
            <>
              <Navbar />
              <DashboardNotInvited />
            </>
          }
        />

        <Route
           path="/dashboard"
          element={
            <>
              <Navbar />
              <Dashboard />
            </>
          }
        />
           <Route
          path="/studentArchive"
          element={
            <>
              <Navbar />
              <StudentArchive />
            </>
          }
        />
            <Route
          path="/Profile"
          element={
            <>
              <Navbar />
              <StudentProfile />
            </>
          }
        />
        <Route
          path="/deliverablesbutton"
          element={
            <>
              <Navbar />
              <Deliverablesbuttons />
            </>
          }
        />
        <Route
          path="/uploadbutton"
          element={
            <>
              <Navbar />
              <UploadButton />
            </>
          }
        />
        <Route
          path="/taskbutton"
          element={
            <>
              <Navbar />
              <TaskButton />
            </>
          }
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
