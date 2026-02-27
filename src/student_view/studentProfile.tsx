export default function studentprofile(){
    return(
        <div className="scroll-smooth font-Poppin  ">
        <div className="sm:ml-64 mt-20  mx-3 sm:mt-30 px-3 sm:px-40 ">
            <h1 className="text-3xl font-semibold text-gray-800 mt-10">Profile Settings</h1>
            <p className="text-gray-600 mt-2">Manage your account information</p>
            <div className="h-100 bg-gray-50 my-6 rounded-xl border border-gray-300">
                <div className="flex flex-col my-6 mx-6">
                    <h1 className="text-md sm:text-xl font-semibold text-gray-800">Personal Information</h1>
                    <p className="text-md  text-gray-500">Update your personal details and preferences</p>
                </div>
            <div className="flex items-center gap-4 mx-6 my-6">
                <div className="flex flex-row gap-4 items-center">
                    <span className="bg-gray-200 flex w-18 h-18 size-full items-center justify-center rounded-full text-2xl">K</span>
                    <div className="">
                     <h1 className="font-semibold text-md sm:text-xl">Kit Francis s. Besa</h1>
                     <p className="text-sm sm:text-md text-gray-500">Student</p>                       
                    </div>

                </div>
            </div>
            </div>

        </div>
    </div>
    );
}