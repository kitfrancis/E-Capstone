import { useNavigate } from "react-router-dom";

export default function adviserDashboard() {
  const navigate = useNavigate();

  return (
    <div className="scroll-smooth font-Poppins">
        <div className="lg:ml-64 mt-25 md:mt-30 mx-3 px-3 max-h-auto lg:px-5 ">
              <h1 className="text-3xl font-semibold text-gray-800 mt-10">Adviser Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage teams, review deliverables, and guide project development.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4  gap-4 mt-5 md:mt-10">
              <div className="bg-gray-200 gap-1  flex flex-col items-center justify-center rounded-lg p-4 px-6">
                <div className="text-center my-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-8 w-8 mx-auto mb-2 text-blue-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg><h1 className="text-2xl font-semibold text-gray-800">2</h1>
                <p className="text-xs text-gray-600">Teams Under Supervision</p>
                </div>
              </div>
              <div className="bg-gray-200 gap-1  flex flex-col items-center justify-center rounded-lg p-4 px-6">
                <div className="text-center my-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock h-8 w-8 mx-auto mb-2 text-orange-600"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>                <h1 className="text-2xl font-semibold text-gray-800">2</h1>
                <p className="text-xs text-gray-600">Awaiting Review</p>
                </div>
              </div>
              <div className="bg-gray-200 gap-1  flex flex-col items-center justify-center rounded-lg  p-4 px-6">
                <div className="text-center my-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-8 w-8 mx-auto mb-2 text-green-600"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>                <h1 className="text-2xl font-semibold text-gray-800">1</h1>
                <p className="text-xs text-gray-600">Approved</p>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg p-4">
                <div className="text-center my-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-alert h-8 w-8 mx-auto mb-2 text-yellow-600"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>  <h1 className="text-2xl font-semibold text-gray-800">0</h1>
                <p className="text-xs text-gray-600">Need Revision</p>
                </div>

              </div>
            </div>

            <div className="bg-gray-200 rounded-full p-1 flex w-full max-w-auto mt-5 md:mt-10">
  
              <button className="flex-1 text-xs md:text-sm bg-white text-black font-medium py-2 rounded-full shadow-sm">
                Group Management
              </button>

              <button onClick={() => navigate("/reviewDeliverables")} className="flex-1 text-xs md:text-sm text-gray-600 font-medium py-2 rounded-full hover:bg-gray-100">
                Review Deliverables
              </button>

              <button onClick={() => navigate("/trackProgress")} className="flex-1 text-xs md:text-sm text-gray-600 font-medium py-2 rounded-full hover:bg-gray-100">
                Track Progress
              </button>

            </div>

            <div className="bg-gray-200 rounded-lg mt-3 px-5 pt-6">
                <h1 className="font-medium flex flex-row gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-5 w-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>My Teams & Groups</h1>
                <p className="text-gray-500 mt-1">Manage and monitor all teams under supervision</p>
            </div>
            <div className="bg-gray-100 mt-4 md:mt-6 rounded-lg p-4 px-7  mb-6 hover:shadow-md">
                <div className="flex  justify-between">
                    <div className="flex flex-col">
                         <h1 className="font-medium text-lg md:text-xl">Team Name</h1>
                    <p className="text-gray-500 text-sm md:text-md ">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <span className="inline-flex items-center justify-center rounded-lg border px-2  bg-black text-gray-100 text-xs md:text-sm font-medium h-7 md:h-8"> Development</span>
                </div>
                <div className="mt-5">
                <div className="flex justify-between items-center mb-2 w-full">
                <h2 className="text-sm font-medium">Overall Progress</h2>
                <span className="text-sm font-semibold">10%</span>
              </div>
              <div className="bg-gray-300 h-2 rounded-full w-full">
                <div className="bg-gray-700 h-2 rounded-full" style={{ width: "10%" }}></div>
              </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                    <div className="bg-blue-50  rounded-lg  p-3 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-4 w-4 mx-auto mb-1 text-blue-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        <h1 className="text-lg font-semibold text-blue-900">1</h1>
                        <p className="text-xs text-blue-700">Member</p>
                    </div>
                    <div className="bg-green-50  rounded-lg  p-3 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 mx-auto mb-1 text-green-600"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> 
                        <h1 className="text-lg font-semibold text-green-900">1</h1>
                        <p className="text-xs text-green-700">Approved</p>
                    </div>
                    <div className="bg-orange-50  rounded-lg  p-3 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock h-4 w-4 mx-auto mb-1 text-orange-600"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <h1 className="text-lg font-semibold text-orange-900">1</h1>
                        <p className="text-xs text-orange-700">Pending</p>
                    </div>
                    <div className="bg-purple-50  rounded-lg  p-3 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar h-4 w-4 mx-auto mb-1 text-purple-600"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                        <h1 className="text-lg font-semibold text-purple-900">1/2   </h1>
                        <p className="text-xs text-purple-700">Task Done</p>
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-4">
                    <div className="pt-4">
                        <h1 className="text-sm font-semibold mb-3">Phase Completion Status</h1>
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <h1 className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-600"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>Proposal</h1>
                                <span className="inline-flex items-center justify-center rounded-lg border px-2 bg-green-500 text-white text-xs font-medium gap-1 h-6 "> Completed</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <h1 className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock h-4 w-4 text-orange-600"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>Development</h1>
                                <span className="inline-flex items-center justify-center rounded-lg  px-2 bg-white text-xs font-medium gap-1 h-6 "> In Review</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <h1 className="flex items-center gap-2"><div className="h-4 w-4 border-2 border-gray-300 rounded-full"></div>Testing</h1>
                                <span className="inline-flex items-center justify-center rounded-lg  px-2 bg-white text-xs font-medium gap-1 h-6 "> Pending</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <h1 className="flex items-center gap-2"><div className="h-4 w-4 border-2 border-gray-300 rounded-full"></div>Documentation</h1>
                                <span className="inline-flex items-center justify-center rounded-lg  px-2 bg-white text-xs font-medium gap-1 h-6 "> Pending</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <h1 className="flex items-center gap-2"><div className="h-4 w-4 border-2 border-gray-300 rounded-full"></div>Defense</h1>
                                <span className="inline-flex items-center justify-center rounded-lg  px-2 bg-white text-xs font-medium gap-1 h-6 "> Pending</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-4">
                    <div className="pt-4">
                        <div className=" flex gap-4">
                            <button className="inline-flex items-center justify-center gap-2 border border-gray-300 rounded-md text-sm font-medium  px-2 py-0.5 md:px-4 md:py-2 w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye h-4 w-4 mr-2"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                View Deliverables
                            </button>
                             <button className="inline-flex items-center justify-center gap-2 border border-gray-300 rounded-md text-sm font-medium px-2 py-0.5 md:px-4 md:py-2 w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-up h-4 w-4 mr-2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                                Track Progress
                            </button>

                        </div>
                    </div>

                </div>
            </div>

            
             
          
        </div>
    </div>
  );
}