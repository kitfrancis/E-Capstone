import { useNavigate } from "react-router-dom";

export default function Uploads() {
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
  
              <button onClick={() => navigate("/dashboard")} className="flex-1 text-sm hover:bg-gray-100 text-gray-600 font-medium py-2 rounded-full">
                Deliverables
              </button>

              <button className="flex-1 text-sm text-black font-medium py-2 rounded-full bg-white">
                Upload New
              </button>

              <button onClick={()=> navigate("/tasks")} className="flex-1 text-sm text-gray-600 font-medium py-2 rounded-full hover:bg-gray-100">
                Tasks
              </button>

            </div>
            <div className=" flex flex-col  max-h-auto bg-gray-100 rounded-lg mt-5 p-5">
              <div className="flex flex-col gap-1">
              <h1 className="text-md font-semibold">Upload Project Deliverable</h1>
              <p className="text-md text-gray-500">Upload a new version of your project  deliverable for review</p>
              </div>
              <div className="space-y-1 mt-5 flex flex-col w-full ">
                  <label htmlFor="" className="text-sm font-semibold">Project Phase</label>
                  <select name="" id="" className="bg-white text-sm border-gray-300 rounded-lg px-4 py-2 h-9 sm:h-10 font-semibold">
                    <option value="">Proposal</option>
                     
                     <option value="">Development</option>

                    <option value="">Testing</option>

                    <option value="">Documentation</option>

                    <option value="">Defense</option>

                  </select>
              </div>
              <div className="space-y-2 mt-2">
                <label htmlFor="" className="font-semibold items-center text-sm">Select File</label>
                <div className="cursor-pointer border-2 border-dashed border-gray-400 hover:border-gray-600 rounded-lg flex items-center justify-center p-7 mt-1">
                    <div className="cursor-pointer flex flex-col items-center justify-center">
                        <h1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-upload h-12 w-12 mx-auto mb-3 text-gray-400" data-fg-chkp30="1.59:1.6824:/src/app/components/DeliverableUpload.tsx:113:15:3969:59:e:Upload::::::4gZ"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg></h1>
                        <p className="text-gray-600">Click to select a file</p>
                        <p className=" text-xs text-gray-500 mt-1">PDF, DOC, DOCX, or ZIP(max 50mb)</p>
                    </div>

                </div>
                <div className=" flex flex-col  max-h-auto bg-white rounded-lg mt-5 px-5 py-3">
                   <h1 className="text-sm font-medium">Submission Process</h1> 
                    <div className="flex flex-col mt-1">
            <ul className="list-disc pl-3 text-start text-sm sm:text-md  space-y-1">
                <li className="marker:text-purple-600 text-gray-600">Upload project deliverables</li>
                <li className="marker:text-blue-600 text-gray-600">Track submission status</li>
                <li className="marker:text-yellow-600 text-gray-600">View feedback from advisers</li>
                <li className="marker:text-green-600 text-gray-600">Manage team tasks</li>
            </ul>
            </div>

                </div>
                <div className="border-t border-gray-300 mt-3">
                            <button className="flex flex-row items-center justify-center bg-black text-gray-100 w-full rounded-lg mt-5 py-2 ">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-upload h-4 w-4 mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>                              Upload Deliverables
                        </button> 
                        </div>



              </div>

               <div>

               </div>
            </div>
        </div>
    </div>
    );
}