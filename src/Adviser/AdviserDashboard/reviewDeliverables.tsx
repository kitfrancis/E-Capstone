import { useNavigate } from "react-router-dom";

export default function reviewDeliverables() {
  const navigate = useNavigate();

  return (
    <div className="scroll-smooth font-Poppins">
        <div className="lg:ml-64 mt-25 md:mt-30 mx-3 px-3 max-h-auto lg:px-5 ">
              <h1 className="text-3xl font-semibold text-gray-800 mt-10">Adviser Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage teams, review deliverables, and guide project development.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4  gap-4 mt-5 md:mt-10">
              <div className="bg-gray-200 gap-1  flex flex-col items-center justify-center rounded-lg p-4 px-6">
                <div className="text-center my-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-8 w-8 mx-auto mb-2 text-blue-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>                <h1 className="text-2xl font-semibold text-gray-800">2</h1>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-alert h-8 w-8 mx-auto mb-2 text-yellow-600"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>                <h1 className="text-2xl font-semibold text-gray-800">1</h1>
                <p className="text-xs text-gray-600">Need Revision</p>
                </div>

              </div>
            </div>

            <div className="bg-gray-200 rounded-full p-1 flex w-full max-w-auto mt-5 md:mt-10">
  
              <button onClick={() => navigate("/adviserDashboard")} className="flex-1 text-sm text-gray-600 font-medium py-2 rounded-full hover:bg-gray-100">
                Group Management
              </button>

              <button  className="flex-1 text-sm bg-white text-black font-medium py-2 rounded-full shadow-sm">
                Review Deliverables
              </button>

              <button onClick={() => navigate("/trackProgress")} className="flex-1 text-sm text-gray-600 font-medium py-2 rounded-full hover:bg-gray-100">
                Track Progress
              </button>

            </div>

            
             
          
        </div>
    </div>
  );
}