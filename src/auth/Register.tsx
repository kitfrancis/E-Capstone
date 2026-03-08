import { useNavigate } from "react-router-dom";


export default function Register() {
    const navigate = useNavigate();


  return (
    <div className="font-Poppins bg-gray-100 scroll-smooth">
        <div className="flex items-center justify-center max-h-auto px-6 lg:px-50 md:px-20">
            <div className="bg-white p-8 rounded-2xl w-full my-6 max-w-md max-h-auto">
               <button onClick={() => navigate("/landingpage")} className="flex items-center font-semibold text-gray-900 hover:bg-gray-200 rounded-lg px-4 p-1 mb-4 md:text-md text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left h-4 w-4 mr-2"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                Back to Role Selection
              </button>
                <h1 className="text-2xl text-center font-medium">Thesis Management System</h1>
                <p className="text-center text-md  text-gray-500 mt-2">Login or Register as <span className="font-semibold">[Role]</span></p>
                <div className="flex flex-col">
                 <div className="bg-gray-200 rounded-full p-1 flex w-full max-w-auto mt-6 md:mt-7 lg:mt-8">
  
              <button onClick={() => navigate("/login")} className="flex-1 text-sm text-gray-600 hover:bg-gray-100 font-medium py-2 rounded-full ">
                Login
              </button>

              <button className="flex-1 text-sm bg-white text-gray-600 font-medium py-2 rounded-full ">
                Register
              </button>

            </div>
            <div className="flex flex-col mt-2 gap-1">
                <label className="text-md font-semibold">Full Name</label>
                    <input type="text" className="bg-gray-100  border-gray-300 text-sm placeholder-gray-600 rounded-lg px-4 py-2 h-9 sm:h-10" placeholder="Full Name" />
                    <label className="mt-2 font-semibold">Email Address</label>
                    <input type="email" className="bg-gray-100  border-gray-300 text-sm placeholder-gray-600 rounded-lg px-4 py-2 h-9 sm:h-10" placeholder="Example@gmail.com" />
                    <label className="mt-2 font-semibold">Password</label>
                    <input type="password" className="bg-gray-100  border-gray-300 text-sm placeholder-gray-600 rounded-lg px-4 py-2 h-9 sm:h-10" placeholder="Create Password" />
                    <label className="mt-2 font-semibold">Role</label>
                    <select name="role" id="role" className="bg-gray-100  text-sm border-gray-300 rounded-lg px-4 py-2 h-9 sm:h-10 font-bold">
                        <option value="student">Student</option>
                        <option value="adviser">Adviser</option>
                        <option value="instructor">Instructor</option>
                    </select>
                    <label className="mt-2 font-semibold">Student ID</label>
                    <input type="text" className="bg-gray-100  border-gray-300 text-sm    placeholder-gray-600 rounded-lg px-4 py-2 h-9 sm:h-10" placeholder="2023-1309-A" />
                    <label className="mt-2 font-semibold">Course</label>
                    <select name="department" id="department" className="bg-gray-100 text-sm border-gray-300 rounded-lg px-4 py-2 h-9 sm:h-10 font-bold">
                        <option value="computer-science">Computer Science</option>
                        <option value="information-technology">Information Technology</option>
                        <option value="software-engineering">Software Engineering</option>
                        <option value="BLIS">BLIS</option>
                    </select>
                 <button onClick={() => navigate("/login")} type="submit" className=" flex items-center gap-1 justify-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 mt-5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus mr-2 h-4 w-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg> Register</button>
           </div>
             
                </div>


            </div>
        </div>
    </div>
  );
}
