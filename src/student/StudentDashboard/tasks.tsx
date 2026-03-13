import { useNavigate } from "react-router-dom";

export default function Tasks() {
    const navigate = useNavigate();
    return(
        <div className="scroll-smooth font-Poppins">
        <div className="lg:ml-64 mt-23 sm:mt-25 mx-3 px-3 max-h-auto lg:px-5 ">
            <h1 className="text-3xl font-semibold text-gray-800 mt-10">Welcome back, Kit Francis!</h1>
            <p className="text-gray-600 mt-2">Track your project progress and manage deliverables.</p>
             <div className="bg-gray-100 rounded-2xl p-1  max-h-auto  mt-5 md:mt-8">
            <div className="gap-1 mx-5 my-5">
              <div className="flex flex-col mb-5 md:mb-8 ">
           <h1 className="font-semibold text-md">Team Overview</h1>
          <p className="text-gray-500 text-md">[Team name - Project]</p>
              </div>

          <div className="space-y-4">
              <div className="flex justify-between items-center mb-2 w-full">
                <h2 className="text-sm font-medium">Current Phase: <span className="font-semibold">Development</span></h2>
                <span className="text-sm font-semibold">10%</span>
              </div>
              <div className="bg-gray-300 h-2 rounded-full w-full">
                <div className="bg-gray-700 h-2 rounded-full" style={{ width: "10%" }}></div>
              </div>
              
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="text-center bg-green-50 p-3 rounded-xl">
                <h1 className="text-2xl font-semibold text-green-700">1</h1>
                  <h1 className="text-sm text-gray-600">Approved</h1>
              </div>
               <div className="text-center bg-blue-50 p-3 rounded-xl">
                <h1 className="text-2xl font-semibold text-blue-700">1</h1>
                  <h1 className="text-sm text-gray-600">Under Review</h1>
              </div>
               <div className="text-center bg-yellow-50 p-3 rounded-xl">
                <h1 className="text-2xl font-semibold text-yellow-700">0</h1>
                  <h1 className="text-sm text-gray-600">Needs Revision</h1>
              </div>

            </div>
            
          </div>
          

            </div>
        </div>
            <div className="bg-gray-200 rounded-full p-1 flex w-full max-w-auto mt-5">
  
              <button onClick={() => navigate("/deliverables")} className="flex-1 text-sm hover:bg-gray-100 text-gray-600 font-medium py-2 rounded-full">
                Deliverables
              </button>

              <button onClick={() => navigate("/uploads")} className="flex-1 text-sm hover:bg-gray-100 text-gray-600 font-medium py-2 rounded-full ">
                Upload New
              </button>

              <button className="flex-1 text-sm text-black font-medium py-2 rounded-full bg-white">
                Tasks
              </button>

            </div>
            <div className="bg-gray-100 mt-4 md:mt-6 rounded-lg p-4 px-7  mb-6">
               <div className="flex flex-col mt-4 md:mt-2 ">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                      <h1 className="font-medium text-lg">Complete User Interface Mockups</h1>
                    <p className="text-gray-500">Team Name </p>
                  </div>
                     <span className="inline-flex items-center justify-center rounded-lg border px-2 bg-green-500 text-white text-xs font-medium gap-1 h-6 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-3 w-3 mr-1"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Completed</span>
                </div>
               </div>
                <div className="flex flex-col mt-4">
                    <h1 className="text-gray-500 text-sm ">Design and finalize all user interface mockups for application.</h1>
                    <h1 className="text-gray-500 text-sm ">Due: Dec 01, 2004</h1>
                </div>
            </div>
            <div className="bg-gray-100 mt-4 md:mt-6 rounded-lg p-4 px-7  mb-6">
               <div className="flex flex-col mt-4 md:mt-2 ">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                      <h1 className="font-medium text-lg">Complete User Interface Mockups</h1>
                    <p className="text-gray-500">Team Name </p>
                  </div>
                     <span className="inline-flex items-center justify-center rounded-lg border px-2 bg-blue-500 text-white text-xs font-medium gap-1 h-6 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-3 w-3 mr-1"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>InProgress</span>
                </div>
               </div>
                <div className="flex flex-col mt-4">
                    <h1 className="text-gray-500 text-sm ">Developer user authentication system with role-based access control.</h1>
                    <h1 className="text-gray-500 text-sm flex items-center justify-between ">Due: Dec 15, 2004 <span className="inline-flex items-center justify-center rounded-lg border px-2 bg-red-600 text-white text-xs font-medium gap-1 h-6 ">Overdue</span></h1>
                </div>
            </div>
        </div>
    </div>
    );
}