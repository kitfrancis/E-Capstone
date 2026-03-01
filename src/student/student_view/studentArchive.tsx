export default function StudentArchive() {
  return (
    <div className="scroll-smooth font-Poppins">
       <div className="lg:ml-64 mt-20 sm:mt-25 mx-3 px-3 max-h-auto lg:px-5 ">
            <h1 className="text-3xl font-semibold text-gray-800 mt-10">Project Archive and Repository</h1>
            <p className="text-gray-600 mt-2">Searchable digital library of completed thesis and capstone projects</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5 md:mt-10">
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
       </div>
    </div>
  );
}