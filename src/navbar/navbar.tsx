import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="relative bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center">

          <div className="flex items-center shrink-0">
            <img
              className="h-8 w-auto"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Logo"
            />
            <h1 className="ml-2 text-xl font-bold text-white">E-Capstone</h1>
          </div>

          
          <div className="hidden sm:flex flex-1 justify-center">
            <div className="flex space-x-4">
              <a className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" href="#">
                Dashboard
              </a>
              <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white" href="#">
                Projects
              </a>
              <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white" href="#">
                Submission
              </a>
              <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white" href="#">
                Mentors
              </a>
              <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white" href="#">
                Reports
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 ml-auto">

            <div className="sm:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {!mobileOpen ? (
                  <svg className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                ) : (
                  <svg className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

            <button className="rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-indigo-500">
              <span className="sr-only">View notifications</span>
              <svg className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
            </button>

            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex rounded-full focus:outline-2 focus:outline-indigo-500"
              >
                <img
                  className="size-8 rounded-full bg-gray-800"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="User"
                />
              </button>

              {profileOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1">
          <a className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" href="#">Dashboard</a>
          <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white" href="#">Projects</a>
          <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white" href="#">Submission</a>
          <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white" href="#">Mentors</a>
          <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white" href="#">Reports</a>
        </div>
      )}
    </nav>
  );
}