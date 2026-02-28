export default function studentprofile(){
    return(
        <div className="scroll-smooth font-Poppins  ">
        <div className="lg:ml-64 mt-20 sm:mt-25 mx-3 px-3 max-h-auto lg:px-20">
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
                <div className="flex flex-col mt-6 gap-1">
                    <label className="text-md font-semibold">Full Name</label>
                    <input type="text" className="bg-white border border-gray-300 placeholder-black rounded-lg px-4 py-2 h-9 sm:h-10" placeholder="[full name]" />
                    <label className="mt-2 font-semibold">Email Address</label>
                    <input type="email" className="bg-white border border-gray-300 placeholder-black rounded-lg px-4 py-2 h-9 sm:h-10" placeholder="[email address]" />
                    <label className="mt-2 font-semibold">Student ID</label>
                    <input type="text" className="bg-white border border-gray-300 placeholder-black rounded-lg px-4 py-2 h-9 sm:h-10" placeholder="[student ID]" />
                    <label className="mt-2 font-semibold">Department</label>
                    <select name="department" id="department" className="bg-white border border-gray-300 rounded-lg px-4 py-2 h-9 sm:h-10 font-bold">
                        <option value="computer-science">Computer Science</option>
                        <option value="information-technology">Information Technology</option>
                        <option value="software-engineering">Software Engineering</option>
                        <option value="BLIS">BLIS</option>
                    </select>
                    <label className="mt-2 font-semibold">Role</label>
                    <input type="text" className="bg-gray-100 border border-gray-300 placeholder-black rounded-lg px-4 py-2 h-9 sm:h-10" placeholder="[role]" disabled />
                    <p className="text-sm text-gray-500">Role connot be changed. Contact your administrator if this is incorrect.</p>
                    <button className="w-full bg-black text-white py-2 mt-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">Save Changes</button>
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