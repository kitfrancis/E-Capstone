import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <div className="font-Poppins">
      <nav className="fixed top-0 left-0 h-full w-64 bg-4CAF50 shadow-md z-50 hidden sm:block">
          <div className="flex flex-col h-full py-3">
            <div className="p-4 border-gray-300 border-b">
            <div className="flex my-2 gap-3 ">
              <img className="h-11 w-11 rounded-xl" src="/images/CCS.png" alt="UA Logo" />
              <div className=" flex-1 min-w-0">
                <h1 className="font-medium text-xl truncate">
                  E-Capstone
                </h1>
                <p className="text-xs text-gray-600">Thesis Management System</p>
              </div>
            </div>
            </div>
            <div className="p-4 border-gray-300 border-b bg-blue-50">
                <div className="flex items-center mt-3 my-2 gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-medium">KF
                  </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-md truncate">Kit Francis S. Besa</p>
                        <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                          Student
                        </span>
                  </div>
                </div>
            </div>
            
           <nav className="flex flex-col mt-4 px-4 gap-3">
              <a href="" className="py-2 px-6 bg-blue-600 text-white rounded-2xl font-medium text-xl truncate transition ">Dashboard</a>
              <a href="" className="py-2 px-6 text-gray-900 hover:bg-gray-100 rounded-2xl font-medium text-xl truncate transition">Archive</a>
              <a href="" className="py-2 px-6 text-gray-900  hover:bg-gray-100 rounded-2xl font-medium text-xl truncate transition">Profile</a>
           </nav>

           <div className="p-4 border-t mt-auto border-gray-300">
             <a href="/login" className=" text-red-600 hover:text-red-800 font-medium text-md">Log out</a>
           </div>

            
          </div>
        </nav>

         {/* Mobile Menu */}
<nav className="fixed top-0 left-0 w-full bg-white shadow-md z-40 sm:hidden">
  <div className="flex items-center justify-between px-4 py-4">
    <button 
      onClick={() => setIsMenuOpen(true)} 
      className="text-gray-600 hover:text-gray-900 focus:outline-none"
    >
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
    <h1 className="text-xl text-gray-800 font-bold">E-Capstone</h1>
    <div className="flex gap-2">
      <img className="h-8 w-8 rounded-full" src="/images/CCS.png" alt="UA Logo" />
       <img className="h-8 w-8 rounded-full" src="/images/Ua.png" alt="Logo" />
    </div>
  </div>
</nav>

<div 
  className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 sm:hidden ${
    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
  onClick={() => setIsMenuOpen(false)}
/>

<aside className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out sm:hidden ${
    isMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`}>
  
  <div className="flex justify-end p-4">
    <button onClick={() => setIsMenuOpen(false)} className="text-gray-500">
       <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
       </svg>
    </button>
  </div>

  <div className="flex flex-col px-6 space-y-4 overflow-y-auto h-[calc(100%-80px)]">
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl">E-Capstone</h1>
      <p className="text-sm text-gray-600">Thesis Management System</p>
      <hr className="w-full border-solid border-gray-300 mt-4" />
    </div>

    <nav className="mt-8 space-y-2">
      <a href="#" className="block rounded-md px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition">Home</a>
      <a href="#" className="block rounded-md px-4 py-3 bg-emerald-600 text-white shadow-md">About Me</a>
      <a href="project.html" className="block rounded-md px-4 py-3 text-gray-700 hover:bg-emerald-50">Projects</a>
      <a href="#" className="block rounded-md px-4 py-3 text-gray-700 hover:bg-emerald-50">Contact</a>
    </nav>

   
  </div>
</aside>
    </div>
    
    </>
   

  );
}