import { useNavigate } from "react-router-dom";

export default function taskbutton(){
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

              <button onClick={() => navigate("/uploadbutton")} className="flex-1 text-sm hover:bg-gray-100 text-gray-600 font-medium py-2 rounded-full ">
                Upload New
              </button>

              <button className="flex-1 text-sm text-black font-medium py-2 rounded-full bg-white">
                Tasks
              </button>

            </div>
            <div className=" flex flex-col items-center max-h-auto bg-gray-100 rounded-lg mt-5 p-4">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar h-12 w-12 text-gray-400 mb-4" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg> 
             <h1 className="text-gray-600">No tasks assigned yet</h1>
            </div>
        </div>
    </div>
    );
}