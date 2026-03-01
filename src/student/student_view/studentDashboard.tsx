import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="scroll-smooth font-Poppins">
        <div className="lg:ml-64 mt-20 sm:mt-25 mx-3 px-3 max-h-auto lg:px-5 ">
            <h1 className="text-3xl font-semibold text-gray-800 mt-10">Welcome back, Kit Francis!</h1>
            <p className="text-gray-600 mt-2">Track your project progress and manage deliverables.</p>
            <div className="bg-gray-200 rounded-full p-1 flex w-full max-w-auto mt-5 md:mt-10">
  
              <button className="flex-1 text-sm bg-white text-black font-medium py-2 rounded-full shadow-sm">
                Deliverables
              </button>

              <button onClick={() => navigate("/uploadbutton")} className="flex-1 text-sm text-gray-600 font-medium py-2 rounded-full hover:bg-gray-100">
                Upload New
              </button>

              <button className="flex-1 text-sm text-gray-600 font-medium py-2 rounded-full hover:bg-gray-100">
                Tasks
              </button>

            </div>
             <div className="flex flex-col items-center  max-h-auto bg-gray-100 rounded-lg mt-5 p-4">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-text h-12 w-12 text-gray-400 mb-4" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
               <h1 className="text-gray-600">No deliverables uploaded yet</h1>
               <p className="text-gray-500 text-sm md:text-md ">Upload your first delivarable to get started.</p>
            </div>
        </div>
    </div>
  );
}