import { useNavigate } from "react-router-dom";
import { useRole } from "../context/RoleContext";


export default function Login() {
    const navigate = useNavigate();

    const { role } = useRole();

    const handleLogin = () => {
  if (!role) return alert("Please select a role first!");
  switch(role) {
    case "Student": navigate("/dashboard"); break;
    case "Instructor": navigate("/instructorDashboard"); break;
    case "Adviser": navigate("/adviserDashboard"); break;
  }
};


  return (
    <div className="font-Poppins bg-gray-100 scroll-smooth">
        <div className="flex items-center justify-center h-screen px-6 lg:px-50 md:px-20">
            <div className="bg-white p-8 rounded-2xl w-full max-w-md max-h-auto">
              <button onClick={() => navigate("/landingpage")} className="flex items-center font-semibold text-gray-900 hover:bg-gray-200 rounded-lg px-4 p-1 mb-4 md:text-md text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left h-4 w-4 mr-2"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                Back to Role Selection
              </button>
                <h1 className="text-2xl text-center font-medium">Thesis Management System</h1>
                <p className="text-center text-md  text-gray-500 mt-2">Login or Register as <span className="font-semibold">{role}</span></p>
                <div className="flex flex-col">
                 <div className="bg-gray-200 rounded-full p-1 flex w-full max-w-auto mt-6 md:mt-7 lg:mt-8">
  
              <button className="flex-1 text-sm bg-white text-black font-medium py-2 rounded-full shadow-sm">
                Login
              </button>

              <button onClick={() => navigate("/register")} className="flex-1 text-sm text-gray-600 font-medium py-2 rounded-full hover:bg-gray-100">
                Register
              </button>

            </div>
            <div className="flex flex-col mt-2 gap-1">
                <label className="text-md font-semibold">Email</label>
                <input type="text" className="bg-gray-100  border-gray-300 text-sm placeholder-gray-600 rounded-lg px-4 py-2 h-9 sm:h-10" placeholder="Example@gmail.com" />
                <label className="font-semibold mt-3">Password</label>
                <input type="password" className="bg-gray-100 border-gray-300 text-sm placeholder-gray-600 rounded-lg px-4 py-2 h-9 sm:h-10" placeholder="Enter your password" />
                 <button onClick={() => handleLogin()   } type="submit" className=" flex items-center gap-2 justify-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 mt-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-log-in mr-2 h-4 w-4" aria-hidden="true"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg> Login</button>
                    
           </div>
             
                </div>


            </div>
        </div>
    </div>
  );
}
