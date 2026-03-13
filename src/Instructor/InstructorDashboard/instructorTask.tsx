import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


export default function instructorTask() {
  const navigate = useNavigate();
    const [openCreateTeam, setOpenCreateTeam] = useState(false);
    const [openCreateTask, setOpenCreateTask] = useState(false);
    
  useEffect(() => {
    if (openCreateTeam || openCreateTask) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openCreateTeam, openCreateTask]);

  return (
    <div className="scroll-smooth font-Poppins">
        <div className="lg:ml-64 mt-15 sm:mt-20 mx-3 px-3 max-h-auto lg:px-5 ">
             <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800 mt-10">Instructor Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage teams, assign tasks, and traack project progress.</p>
            </div>
            <div className="flex items-center md:justify-end mt-3 flex-row gap-3">
                <button onClick={() => setOpenCreateTeam(true)} className="flex justify-center items-center rounded-md text-sm font-medium bg-black text-gray-100  px-4 py-2 hover:bg-gray-900 transition-colors "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus h-4 w-4 mr-2"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>Create Team</button>
                <button onClick={() => setOpenCreateTask(true)} className="flex justify-center items-center rounded-md text-sm font-medium bg-gray-100 text-gray-900  px-4 py-2 hover:bg-gray-200 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar h-4 w-4 mr-2"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>Create Task</button>
            </div>
          </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4  gap-4 mt-5 md:mt-10">
              <div className="bg-gray-200 gap-1  flex flex-col items-center justify-center rounded-lg p-4 px-6">
                <div className="text-center my-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-8 w-8 mx-auto mb-2 text-blue-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <h1 className="text-2xl font-semibold text-gray-800">2</h1>
                <p className="text-sm text-gray-600">Total Teams</p>
                </div>
              </div>
              <div className="bg-gray-200 gap-1  flex flex-col items-center justify-center rounded-lg p-4 px-6">
                <div className="text-center my-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-text h-8 w-8 mx-auto mb-2 text-green-600"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                <h1 className="text-2xl font-semibold text-gray-800">2</h1>
                <p className="text-sm text-gray-600">Active Projects</p>
                </div>
              </div>
              <div className="bg-gray-200 gap-1  flex flex-col items-center justify-center rounded-lg  p-4 px-6">
                <div className="text-center my-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock h-8 w-8 mx-auto mb-2 text-yellow-600"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <h1 className="text-2xl font-semibold text-gray-800">1</h1>
                <p className="text-sm text-gray-600">Pending Review</p>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg p-4">
                <div className="text-center my-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar h-8 w-8 mx-auto mb-2 text-red-600"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                <h1 className="text-2xl font-semibold text-gray-800">1</h1>
                <p className="text-sm text-gray-600">Overdue Tasks</p>
                </div>

              </div>
            </div>

            <div className="bg-gray-200 rounded-full p-1 flex w-full max-w-auto mt-5 md:mt-10">
  
              <button onClick={() => navigate("/Teams")} className="flex-1 text-sm text-gray-600 font-medium py-2 rounded-full hover:bg-gray-100">
                Teams
              </button>

              <button onClick={() => navigate("/submission")} className="flex-1 text-sm text-gray-600 font-medium py-2 rounded-full hover:bg-gray-100">
                Submissions
              </button>

              <button  className="flex-1 text-sm bg-white text-black font-medium py-2 rounded-full shadow-sm">
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
                     <span className="inline-flex items-center justify-center rounded-lg border px-2 bg-green-500 text-white text-xs font-medium gap-1 h-6 "> Completed</span>
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
                     <span className="inline-flex items-center justify-center rounded-lg border px-2 bg-blue-500 text-white text-xs font-medium gap-1 h-6 ">In Progress</span>
                </div>
               </div>
                <div className="flex flex-col mt-4">
                    <h1 className="text-gray-500 text-sm ">Developer user authentication system with role-based access control.</h1>
                    <h1 className="text-gray-500 text-sm flex items-center justify-between ">Due: Dec 15, 2004 <span className="inline-flex items-center justify-center rounded-lg border px-2 bg-red-600 text-white text-xs font-medium gap-1 h-6 ">Overdue</span></h1>
                </div>
            </div>

             {openCreateTeam && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    
    {/* Background */}
    <div
      className="absolute inset-0 bg-black/40"
      onClick={() => setOpenCreateTeam(false)}
    />

    <div className="relative bg-white rounded-lg w-full max-w-lg py-5 pb-8 px-6 mx-5 ">
      <h1 className="font-semibold text-xl md:text-lg ">Create New Team</h1>
      <p className="text-gray-500">Set up new project team with members and adviser</p>
      <div className="flex flex-col gap-1 mt-3">
        <label className="font-medium ">Team Name</label>
        <input type="text" className="bg-gray-100  border-gray-300 text-sm placeholder-gray-600 rounded-lg px-4 py-2 h-9 sm:h-10" placeholder="e.g., Team Alpha" />
        <label className="font-medium mt-2 ">Project Title</label>
        <input type="text" className="bg-gray-100  border-gray-300 text-sm placeholder-gray-600 rounded-lg px-4 py-2 h-9 sm:h-10" placeholder="e.g., AI-Powered Learning Platform" />
        <label className="font-medium mt-2">Assigned Adviser</label>
        <select name="adviser" id="adviser" className="bg-gray-100  text-sm border-gray-300 rounded-lg px-4 py-2 h-9 sm:h-10 font-medium">
            <option value="student">Dr. Sarah Johnson</option>
            <option value="adviser">Prof. Robert Lee</option>
            <option value="instructor">Dr. Maria Garcia</option>
          </select>
        <label className="font-medium mt-2">Members Emails (comma-seperated)</label>
        <textarea className="bg-gray-100  border-gray-300 text-sm placeholder-gray-600 rounded-lg px-4 py-2 h-14 sm:h-16 resize-none" placeholder="student1@gantiquespride.edu.ph, student2@gantiquespride.edu.ph" />
        <button type="submit" className=" flex items-center gap-2 justify-center bg-black text-white py-1 rounded-md hover:bg-gray-800 transition-colors duration-300 mt-5">Create Team</button>

      </div>
    </div>
  </div>
)}

{openCreateTask && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="absolute inset-0 bg-black/40"
    onClick={() => setOpenCreateTask(false)}
    />

    <div className="relative bg-white rounded-lg w-full max-w-lg py-5 pb-8 px-6 mx-5 ">
      <h1 className="font-semibold text-xl md:text-lg ">Create New Task</h1>
      <p className="text-gray-500">Assign a task to a team with a deadline</p>
      <div className="flex flex-col gap-1 mt-3">
        <label className="font-medium ">Select Team</label>
        <select name="adviser" id="adviser" className="bg-gray-100  text-sm border-gray-300 rounded-lg px-4 py-2 h-9 sm:h-10 font-medium">
            <option value="" selected hidden  disabled>
              Choose a Team
            </option>
            <option value="">Dr. Sarah Johnson</option>
            <option value="">Prof. Robert Lee</option>
            <option value="">Dr. Maria Garcia</option>
          </select>
        <label className="font-medium mt-2 ">Task Title</label>
        <input type="text" className="bg-gray-100  border-gray-300 text-sm placeholder-gray-600 rounded-lg px-4 py-2 h-9 sm:h-10" placeholder="e.g., Complete Database Design" />
        <label className="font-medium mt-2">Description</label>
        <textarea className="bg-gray-100  border-gray-300 text-sm placeholder-gray-600 rounded-lg px-4 py-2  h-14 sm:h-16 resize-none" placeholder="Task details and requirements..." />
        <label className="font-medium mt-2">Due Date</label>
        <input type="date" className="bg-gray-100  border-gray-300 text-sm placeholder-gray-600 rounded-lg px-4 py-2 h-9 sm:h-10"/>

        <button type="submit" className=" flex items-center gap-2 justify-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 mt-5">Create Task & Notify Team</button>

      </div>
    </div>

  </div>
)}
        </div>
    </div>
  );
}