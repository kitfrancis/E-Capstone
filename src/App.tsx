import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/login";
import Signup from "./auth/signup";
import Dashboard from "./student_view/studentDashboard";
import Navbar from "./navbar/navbar";
import StudentArchive from "./student_view/studentArchive";
import StudentProfile from "./student_view/studentProfile";
import Deliverablesbuttons from "./Dashboard_not_invited_student/Deliverablesbuttons";
import UploadButton from "./Dashboard_not_invited_student/uploadbutton";
import TaskButton from "./Dashboard_not_invited_student/taskbutton";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* StudentPages */}
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
          path="/deliverables"
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
