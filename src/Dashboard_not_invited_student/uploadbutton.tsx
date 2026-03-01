import { useNavigate } from "react-router-dom";

export default function uploadbuttons() {
    const navigate = useNavigate();
    return(
         <div className="scroll-smooth font-Poppins">
        <div className="lg:ml-64 mt-20 sm:mt-25 mx-3 px-3 max-h-auto lg:px-5 ">
            <h1 className="text-3xl font-semibold text-gray-800 mt-10">Welcome back, Kit Francis!</h1>
            <p className="text-gray-600 mt-2">Track your project progress and manage deliverables.</p>
            <div className="bg-gray-200 rounded-full p-1 flex w-full max-w-auto mt-5">
  
              <button onClick={() => navigate("/deliverables")} className="flex-1 text-sm hover:bg-gray-100 text-gray-600 font-medium py-2 rounded-full">
                Deliverables
              </button>

              <button className="flex-1 text-sm text-black font-medium py-2 rounded-full bg-white">
                Upload New
              </button>

              <button onClick={()=> navigate("/taskbutton")} className="flex-1 text-sm text-gray-600 font-medium py-2 rounded-full hover:bg-gray-100">
                Tasks
              </button>

            </div>
            <div className=" flex flex-col items-center max-h-auto bg-gray-100 rounded-lg mt-5 p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-12 w-12 text-gray-400 mb-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> 
              <h1 className="text-gray-600">You are not assigned to a team yet.</h1>
              <p className="text-gray-500 text-sm md:text-md">Please contact your instructor.</p>
            </div>
        </div>
    </div>
    );
}