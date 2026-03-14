import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useRole } from "../../context/RoleContext";


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);
     const location = useLocation();
      const { role } = useRole(); 



   
type RoleType = "Student" | "Instructor" | "Adviser";

interface MenuItem {
  name: string;
  path: string;
   group?: string[];
   icon?: React.ReactNode;
}

const menuData: Record<RoleType, MenuItem[]> = {
  Student: [
    { name: "Dashboard",
      path: "/dashboard",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-layout-dashboard h-5 w-5"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
      ),
      group: [
        "/dashboard",
        "/deliverables",
        "/uploads",
        "/tasks",
      ],
     },
    { name: "Archive", path: "/studentArchive",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-archive h-5 w-5"><rect width="20" height="5" x="2" y="3" rx="1"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path></svg>
      ),
     },
    { name: "Profile", path: "/Profile",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user h-5 w-5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      ),
     },
  ],
  Instructor: [
     {
      name: "Dashboard",
      path: "/instructorDashboard",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-layout-dashboard h-5 w-5"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
      ),
      group: [
        "/instructorDashboard",
        "/instructorTask",
        "/submission",
        "/Teams",
      ],
    },
    { name: "Archive", path: "/studentArchive",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-archive h-5 w-5"><rect width="20" height="5" x="2" y="3" rx="1"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path></svg>
      ),
     },
    { name: "Profile", path: "/instructorProfile",
       icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user h-5 w-5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      ),
     },
  ],
  Adviser: [
    { name: "Dashboard", path: "/adviserDashboard",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-layout-dashboard h-5 w-5"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
      ),
      group: [
        "/adviserDashboard",
        "/reviewDeliverables",
        "/trackProgress",
      ],
     },
    { name: "Archive", path: "/studentArchive",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-archive h-5 w-5"><rect width="20" height="5" x="2" y="3" rx="1"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path></svg>
      ),
     },
    { name: "Profile", path: "/Profile",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user h-5 w-5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      ),
     },
  ],
};


const menuItems: MenuItem[] = menuData[role as RoleType] || menuData["Student"];



     

    const getPageTitle = () => {
  if (
    location.pathname === "/dashboard" ||
    location.pathname === "/deliverablesbutton" ||
    location.pathname === "/uploadbutton" ||
    location.pathname === "/taskbutton"  ||
    location.pathname === "/deliverables" ||
    location.pathname === "/uploads" ||
    location.pathname === "/tasks" ||
    location.pathname === "/instructorDashboard" ||
    location.pathname === "/instructorTask" ||
    location.pathname === "/submission" ||
    location.pathname === "/Teams" ||
    location.pathname === "/adviserDashboard"  ||
    location.pathname === "/reviewDeliverables" ||
    location.pathname === "/trackProgress"
  ) {
    return "Dashboard";
  } else if (location.pathname === "/deliverables") { 
    return "Deliverables";
  }
  else if (location.pathname === "/studentArchive") {
    return "Archive";
  } else if (location.pathname === "/Profile") {
    return "Profile";
  }
  else if (location.pathname === "/instructorProfile"){
    return "Profile";
  }
   else if (location.pathname === "/adviserProfile"){
    return "Profile";
  }
    else {
    return "";
  }
};
useEffect(() => {
  setIsMenuOpen(false);
}, [location.pathname]);

  return (
    <>
    <div className="font-Poppins">
      <nav className="fixed top-0 left-0 h-full w-64  shadow-md z-50 hidden lg:block">
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
                          {role}
                        </span>
                  </div>
                </div>
            </div>
            
                    <nav className="flex flex-col mt-4 px-4 gap-3">
                    {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => {
              const groupedActive =
                item.group?.includes(location.pathname);

              const active = isActive || groupedActive;

              return active
                ? "flex items-center gap-2 py-2 px-6 bg-blue-600 text-white rounded-2xl font-medium text-xl"
                : "flex items-center gap-2 py-2 px-6 text-gray-900 hover:bg-gray-100 rounded-2xl font-medium text-xl";
            }}
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
          </nav>

           <div className="p-4 border-t mt-auto border-gray-300">
             <a href="/login" className=" text-red-600 hover:text-red-800 font-medium text-md">Log out</a>
           </div>

            
          </div>
        </nav>

         {/* Mobile Menu */}
<nav className="fixed top-0 left-0 lg:left-64 w-full lg:w-[calc(100%-16rem)] bg-white shadow-md z-40">
  <div className="flex items-center justify-between px-4 py-4 ">
    <div className="flex items-center gap-4">
    <button 
      onClick={() => setIsMenuOpen(true)} 
      className="text-gray-600 hover:text-gray-900 focus:outline-none"
    >
      <div>
        
      </div>
      <svg className="h-7 w-7 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
    <div className="flex flex-col">
    <h1 className="text-xl text-gray-800 font-semibold capitalize">{getPageTitle()}</h1>
    <p className="hidden sm:block">{role} view</p>
    </div>

    </div>
      
    <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-full hover:bg-gray-200"
      >
        <svg
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a2.333 2.333 0 01-4.714 0M17.513 15.323c.368-1.312 1.462-2.442 1.487-4.823 0-2.103-1.635-3.564-3.474-3.927a3.333 3.333 0 00-6.652 0c-1.84.363-3.474 1.824-3.474 3.927 0 2.381 1.119 3.511 1.487 4.823l.11.39h10.433l.11-.39z"
          />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/30"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-semibold text-lg">Notifications</h2>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="p-4 space-y-3 text-sm">
          <div className="p-3 rounded-lg hover:bg-gray-100">
            📄 Student submitted capstone proposal
          </div>

          <div className="p-3 rounded-lg hover:bg-gray-100">
            👨‍🏫 Adviser commented on your thesis
          </div>

          <div className="p-3 rounded-lg hover:bg-gray-100">
            📅 Defense schedule updated
          </div>
        </div>
      </div>

  </div>
</nav>

<div 
  className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 sm:hidden ${
    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
  onClick={() => setIsMenuOpen(false)}
/>

<aside className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
    isMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`}>
  
  <div className="flex justify-end p-3">
    <button onClick={() => setIsMenuOpen(false)} className="text-gray-500">
       <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
       </svg>
    </button>
  </div>

  <div className="flex flex-col space-y-4 overflow-y-auto h-[calc(100%-80px)]">
    <div className="flex flex-col h-full ">
      <div className="p-4 border-gray-300 border-b">
            <div className="flex gap-3 ">
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
                          {role}
                        </span>
                  </div>
                </div>
            </div>
             <nav className="flex flex-col mt-4 px-4 gap-3">
            {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => {
              const groupedActive =
                item.group?.includes(location.pathname);

              const active = isActive || groupedActive;

              return active
                ? "flex items-center gap-2 py-2 px-6 bg-blue-600 text-white rounded-2xl font-medium text-xl"
                : "flex items-center gap-2 py-2 px-6 text-gray-900 hover:bg-gray-100 rounded-2xl font-medium text-xl";
            }}
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
  </nav>

           <div className="p-3 border-t mt-auto border-gray-300">
             <a href="/login" className=" text-red-600 hover:text-red-800 font-medium text-md">Log out</a>
           </div>
    </div>

    

   
  </div>
</aside>
    </div>
    
    </>
   

  );
}