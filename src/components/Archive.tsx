import { useState } from "react";


export default function Archive() {

      const [selectedProject, setSelectedProject] = useState<any>(null);

      

    const projects = [
  {
    
    title: "E-Capstone: Thesis Management System",
    team: "Team Codevenger",
    year: 2026,
    course: "Information Technology",
    grade: "A",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ex soluta recusandae dolor, dolores exercitationem sequi voluptas quasi dolorem, minus fuga assumenda blanditiis nost.",
    archivedDate: "2026-05-10",
    keywords: ["Web-Base", "Real-time", "Campus", "Progressive", "hello", "world", "bruh", "hello again"],
    members: [
              "Kit Francis S. Besa",
              "Carl Andrei Diomon",
              "Stephen Gabarda",
              "Kyle Steven Morillo"
            ],
    adviser:"Ma'am Keller"
  },
  {
    title: "Smart Campus Navigation System",
    team: "Team Innovators",
    year: 2026,
    course: "Information Technology",
    grade: "A+",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ex soluta recusandae dolor, dolores exercitationem sequi voluptas quasi dolorem, ",
    archivedDate: "2026-05-10",
    keywords: ["Campus", "Navigation", "Mobile"],
    members: [
                "Kit Francis S. Besa",
                "Carl Andrei Diomon",
                "Stephen Gabarda",
                "Kyle Steven Morillo"
              ],
    adviser: "Prof. Michael Chen"
  },
   {
    title: "TraceSync UA: Web-based Alumni Tracking and Event Engagement System for the University of Antique",
    team:"buto",
    year: 2026,
    course: "Iformation Technology",
    grade: "A",
    abstract: "A web-based Alumni Tracking and Event Engagement System, that could trace alumni and post event, job postings etc.",
    archivedDate: "2026-05-10",
    keywords: ["Campus", "Web-Base", "Mobile, "],
    members: [
        "Chinnie Aira S. Calibjo",
        " Niel Benedic S. Dayoja",
        "Charles Justin N. Samindih",
       "Clyde Dextler D. Fradrillan"
       ],
    adviser: "Sir Carl"
   },
    {
    
    title: "E-Capstone: Thesis Management System",
    team: "Team Codevenger",
    year: 2026,
    course: "Information Technology",
    grade: "A",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ex soluta recusandae dolor, dolores exercitationem sequi voluptas quasi dolorem, minus fuga assumenda blanditiis nost.",
    archivedDate: "2026-05-10",
    keywords: ["Web-Base", "Real-time", "Campus", "Progressive", "hello", "world", "bruh", "hello again"],
    members: [
              "Kit Francis S. Besa",
              "Carl Andrei Diomon",
              "Stephen Gabarda",
              "Kyle Steven Morillo"
            ],
    adviser:"Ma'am Keller"
  },
];

  return (
    <div className="scroll-smooth font-Poppins">
       <div className="lg:ml-64 mt-20 sm:mt-25 mx-3 px-3 max-h-auto lg:px-5 ">
            <h1 className="text-3xl font-semibold text-gray-800 mt-10">Project Archive and Repository</h1>
            <p className="text-gray-600 mt-2">Searchable digital library of completed thesis and capstone projects</p>
            <div className="grid grid-cols-1 md:grid-cols-4  gap-4 mt-5 md:mt-10">
              <div className="bg-gray-200 gap-1  flex flex-col items-center justify-center rounded-lg p-4 px-6">
                <div className="text-center my-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-text h-8 w-8 mx-auto mb-2 text-blue-600" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                <h1 className="text-2xl font-semibold text-gray-800">2</h1>
                <p className="text-sm text-gray-600">Total Projects</p>
                </div>
              </div>
              <div className="bg-gray-200 gap-1  flex flex-col items-center justify-center rounded-lg p-4 px-6">
                <div className="text-center my-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar h-8 w-8 mx-auto mb-2 text-green-600" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                <h1 className="text-2xl font-semibold text-gray-800">1</h1>
                <p className="text-sm text-gray-600">Academic Year</p>
                </div>
              </div>
              <div className="bg-gray-200 gap-1  flex flex-col items-center justify-center rounded-lg  p-4 px-6">
                <div className="text-center my-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-tag h-8 w-8 mx-auto mb-2 text-purple-600" aria-hidden="true"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
                <h1 className="text-2xl font-semibold text-gray-800">10</h1>
                <p className="text-sm text-gray-600">Unique Keywords</p>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg p-4">
                <div className="text-center my-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-8 w-8 mx-auto mb-2 text-orange-600" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                <h1 className="text-2xl font-semibold text-gray-800">1</h1>
                <p className="text-sm text-gray-600">Department</p>
                </div>

              </div>
            </div>

            <div className="bg-gray-200 gap-6  flex flex-col  mt-5 md:mt-8 rounded-lg p-4 px-6">
              <div className="">
                  <h1 className="font-semibold text-md flex items-center gap-4"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-funnel h-5 w-5" data-fg-ddn45="1.56:1.13602:/src/app/components/ArchiveRepository.tsx:109:13:4136:30:e:Filter::::::BVUM"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>Search & Filter</h1>
              </div>
              <div className="md:col-span-3 gap-2 ">
                  <label className="font-semibold text-sm">Search Projects</label>
                  <input type="text" className="bg-white  border-gray-300 text-sm placeholder-gray-600 rounded-lg px-4 py-2 h-9 mt-1 sm:h-10 w-full" placeholder="Search by title, keyword, abstract, or team name..." />

                  <div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-5 py-3">
                      <div className="space-y-1 flex flex-col">
                        <label className="font-semibold text-sm">Year</label>
                        <select name="year" id="year" className="bg-white border text-sm border-gray-300 rounded-lg px-4 py-2 h-9 sm:h-10 font-semibold">
                            <option value="allYear">All Year</option>
                            <option value="current">2026</option>
                        </select>
                      </div>
                      <div className="space-y-1 flex flex-col">
                        <label className="font-semibold text-sm">Department</label>
                        <select name="Departmen" id="department" className="bg-white border text-sm border-gray-300 rounded-lg px-4 py-2 h-9 sm:h-10 font-semibold">
                            <option value="allDepartment">All Department</option>
                            <option value="current">2026</option>
                        </select>
                      </div>
                      <div className="flex items-end ">
                        <button data-slot="button" className="inline-flex items-center justify-center gap-2  rounded-md text-sm font-medium border border-gray-400 h-10 px-4 py-2 w-full" data-fg-ddn80="1.56:1.13602:/src/app/components/ArchiveRepository.tsx:165:15:6342:321:e:Button:t::::s:BNeg:1" data-fg-csem0="0.17:0.2106:/src/app/components/ui/button.tsx:50:5:1941:121:e:Comp::1">Clear Filters</button>                      </div>
                    </div>

                    <p className="text-sm">Showing 2 of 2 projects.</p>

                  </div>
              </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 md:mt-8 ">
              <div className="space-y-4 ">
                 <h1 className="font-semibold text-xl">Projects</h1>
                 {projects.map((project, index) => (
                  <div key={index} onClick={() => setSelectedProject(project)} className=" bg-gray-100 mt-4 md:mt-6 rounded-lg p-4 px-6 ">
                      <div className="flex flex-col mt-4">
                        <div className="flex justify-between">
                        <h1 className="text-lg font-semibold">{project.title}</h1> <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 border-gray-300 text-xs font-medium gap-1 h-6 ">{project.grade}</span>
                        </div>
                        <p className="text-gray-500 font-medium mt-2">{project.team} • {project.year}</p>
                      </div> 
                      <div className="mt-5 md:mt-6 pb-3">
                          <p className="text-sm text-gray-700 line-clamp-2 mb-3">{project.abstract}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.keywords.map((keyword,index) =>
                              <div key={index} className="inline-flex items-center bg-gray-300 rounded-lg font-medium py-0.5 w-fit px-3">
                              <h1 className="text-xs font-medium line-clamp-1">{keyword}</h1>
                            </div>
                            )}
                            
                             
                          </div> 
                          <p className="text-xs text-gray-500">{project.course} • Archived {project.archivedDate}
                          </p>

                      </div>


                  </div>

                 ))}
                 
              </div>

              <div className={`mt-4 md:mt-6  rounded-lg w-full py-4 px-6 flex flex-col bg-gray-100  ${
    selectedProject ? "bg-gray-100" : "bg-gray-100 max-h-auto md:max-h-50 justify-center"
  }`}>
                 {selectedProject ? (
                  <>
                           <div className="grid-rows-1">
                      <div className="flex justify-between items-start">
                        <div className=" flex flex-col mt-1">
                            <h1 className="font-semibold text-md ">{selectedProject.title}</h1>
                            <p className="text-gray-500 font-medium ">{selectedProject.team} • {selectedProject.year}</p>
                        </div>
                      <span className="inline-flex items-center justify-center rounded-md border px-2  bg-black text-gray-100  text-sm font-medium gap-1 h-10 w-10 ">{selectedProject.grade}</span>

                      </div>

                    </div>
                    <div className="mt-5 md:mt-6 pb-6">
                      <div>
                            <h1 className="font-semibold mb-2 text-lg">Abstract</h1>
                        <p className="text-sm text-gray-700 mb-3">{selectedProject.abstract}</p>
                      </div>
                      <div>
                            <h1 className="font-semibold mb-2 text-lg">Keywords</h1>
                           <div className="flex flex-wrap gap-2 mb-3">
                          {selectedProject?.keywords?.map((keyword: string, index: number) => (
                            <div
                              key={index}
                              className="inline-flex items-center bg-gray-300 rounded-lg font-medium py-0.5 w-fit px-3"
                            >
                              <span className="text-xs font-medium line-clamp-1">
                                {keyword}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5">
                        <h1 className="font-semibold mb-2 text-lg">Team Member</h1>
                        <div className=" space-y-1 ">
                          {selectedProject?.members?.map((member: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">

                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-gray-400" > <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> <circle cx="9" cy="7" r="4"></circle> </svg>

                      <p className="text-sm ">{member}</p>

                      </div>
                       ))}
                          
                        </div>
                      </div>
                      <div className="mt-4">
                        <h1 className="font-semibold mb-2 text-lg">Adviser</h1>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-gray-400" > <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> <circle cx="9" cy="7" r="4"></circle> </svg>
                                  <p className="text-sm ">{selectedProject.adviser}</p>

                            </div>
                        </div>
                      </div>
                      <div className="mt-4">
                            <h1 className="font-semibold mb-2 text-lg">Course</h1>
                            <p className="text-sm">{selectedProject.course}</p>
                      </div>

                      <div className="mt-4">
                            <h1 className="font-semibold mb-2 text-lg">Archived Data</h1>
                            <p className="text-xs ">{selectedProject.archivedDate}</p>
                      </div>

                        <div className="border-t border-gray-300 mt-3">
                            <button className="flex flex-row items-center justify-center bg-black text-gray-100 w-full rounded-lg mt-5 py-1 ">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-download h-4 w-4 mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                              Download All Files
                        </button>
                        </div>
                        
                    </div>
                  
                  </>
                


                 ): (
                      <div className=" flex flex-col items-center">
                        
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-text h-16 w-16 text-gray-300 mb-4"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                            <h1 className="text-gray-500">
                              Select a project to view details
                            </h1>
                            
                      </div>

                 )
                }
              </div>

              
            </div>
       </div>
    </div>
  );
}