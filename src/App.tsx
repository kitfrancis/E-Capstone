import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/login";
import Signup from "./auth/signup";
import Dashboard from "./student_view/studentDashboard";
import Navbar from "./navbar/navbar";
import StudentArchive from "./student_view/studentArchive";
import StudentProfile from "./student_view/studentProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
