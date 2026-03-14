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
import Tasks from "./student/StudentDashboard/tasks";
import Deliverables from "./student/StudentDashboard/deliverables";
import Uploads from "./student/StudentDashboard/upload";
import { RoleProvider } from "./context/RoleContext";
import InstructorDashboard from "./Instructor/InstructorDashboard/instructorDashboard";
import InstructorProfile from "./Instructor/instructorView/instructorProfile"
import InstructorTask from "./Instructor/InstructorDashboard/instructorTask";
import Teams from "./Instructor/InstructorDashboard/Teams";
import Submission from "./Instructor/InstructorDashboard/submission";
import AdviserDashboard from "./Adviser/AdviserView/adviserDashboard";
import AdviserProfile from "./Adviser/AdviserView/adviserProfile";
import ReviewDeliverables from "./Adviser/AdviserDashboard/reviewDeliverables";
import TrackProgress from "./Adviser/AdviserDashboard/trackProgress";


function App() {

  return (
    <RoleProvider>
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
        <Route
          path="/tasks"
          element={
            <>
              <Navbar />
              <Tasks />
            </>
          }
        />
        <Route
          path="/uploads"
          element={
            <>
              <Navbar />
              <Uploads />
            </>
          }
        />
        <Route
          path="/deliverables"
          element={
            <>
              <Navbar />
              <Deliverables />
            </>
          }
        />
         {/*instructorPages*/}

      <Route
        path="/instructorDashboard"
        element={
          <>
            <Navbar/>
            <InstructorDashboard/>
          </>
        }
      />
       <Route
        path="/instructorProfile"
        element={
          <>
            <Navbar/>
            <InstructorProfile/>
          </>
        }
      />
      <Route
        path="/instructorTask"
        element={
          <>
            <Navbar/>
            <InstructorTask/>
          </>
        }
      />
      <Route
        path="/submission"
        element={
          <>
            <Navbar/>
            <Submission/>
          </>
        }
      />
      <Route
        path="/Teams"
        element={
          <>
            <Navbar/>
            <Teams/>
          </>
        }
      />


  {/*AdviserPages*/}

      <Route
        path="/adviserDashboard"
        element={
          <>
            <Navbar/>
            <AdviserDashboard/>
          </>
        }
      />

      <Route
        path="/adviserProfile"
        element={
          <>
            <Navbar/>
            <AdviserProfile/>
          </>
        }
      />
      <Route
        path="/reviewDeliverables"
        element={
          <>
            <Navbar/>
            <ReviewDeliverables/>
          </>
        }
      />
      <Route
        path="/trackProgress"
        element={
          <>
            <Navbar/>
            <TrackProgress/>
          </>
        }
      />
     



      </Routes>

     

    </BrowserRouter>
    </RoleProvider>
    
  );
}

export default App;
