export default function studentprofile(){
    return(
        <div className="scroll-smooth font-Poppins  ">
        <div className="lg:ml-64 mt-20 sm:mt-25 mx-3 px-3 max-h-auto md:px-64 ">
            <h1 className="text-3xl font-semibold text-gray-800 mt-10">Profile Settings</h1>
            <p className="text-gray-600 mt-2">Manage your account information</p>
            <div className="h-auto bg-gray-50 my-6  rounded-xl border border-gray-300">
                <div className="flex flex-col my-6 mx-6">
                    <h1 className="text-md sm:text-xl font-semibold text-gray-800">Personal Information</h1>
                    <p className="text-md  text-gray-500">Update your personal details and preferences</p>
                </div>
            <div className="mx-6 my-6">
                <div className="flex items-center gap-4 ">
                    <span className="bg-gray-200 flex w-18 h-18 size-full items-center justify-center rounded-full text-2xl">K</span>
                    <div className="">
                     <h1 className="font-semibold text-md sm:text-xl">Kit Francis s. Besa</h1>
                     <p className="text-sm sm:text-md text-gray-500">Student</p> 
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-md font-semibold">Full Name</label>
                    <input type="text" className="bg-white border border-gray-300 text-sm placeholder-black rounded-lg px-4 py-2 h-9 sm:h-10" placeholder="[full name]" />
                    <label className="mt-2 font-semibold">Email Address</label>
                    <input type="email" className="bg-white border border-gray-300 text-sm placeholder-black rounded-lg px-4 py-2 h-9 sm:h-10" placeholder="[email address]" />
                    <label className="mt-2 font-semibold">Student ID</label>
                    <input type="text" className="bg-white border border-gray-300 text-sm    placeholder-black rounded-lg px-4 py-2 h-9 sm:h-10" placeholder="[student ID]" />
                    <label className="mt-2 font-semibold">Course</label>
                    <select name="department" id="department" className="bg-white border text-sm border-gray-300 rounded-lg px-4 py-2 h-9 sm:h-10 font-bold">
                        <option value="computer-science">Computer Science</option>
                        <option value="information-technology">Information Technology</option>
                        <option value="software-engineering">Software Engineering</option>
                        <option value="BLIS">BLIS</option>
                    </select>
                    <label className="mt-2 font-semibold">Role</label>
                    <input type="text" className="bg-gray-100 border text-sm border-gray-300 placeholder-black rounded-lg px-4 py-2 h-9 sm:h-10" placeholder="[role]" disabled />
                    <p className="text-sm text-gray-500">Role connot be changed. Contact your administrator if this is incorrect.</p>
                    <button className=" flex  items-center justify-center w-full bg-black text-white py-2 mt-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-save h-4 w-4 mr-2"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg>Save Changes</button>
                </div>

            </div> 
            </div>

            <div className="h-auto bg-gray-50 my-6  rounded-xl border border-gray-300">
                <div className="flex flex-col my-6 mx-6">
                    <h1 className="text-md sm:text-xl font-semibold text-gray-800">Account Security</h1>
                    <p className="text-gray-600">Manage your password and security settings</p>
                    <button className="w-full bg-white border border-gray-300 text-black py-2 mt-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">Change Password</button>
                </div>
            </div>

        </div>
    </div>
    );
}