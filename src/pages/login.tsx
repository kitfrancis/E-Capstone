
export default function Login() {


  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900">
        <div>
            <div className="flex justify-center">
                  <img src="/src/assets/react.svg" alt="E-Capstone Logo" className="h-15 w-20 border mb-4 rounded-4xl" />
            </div>
          
            <h1 className="text-3xl font-semibold text-gray-300">Sign in to E-Capstone</h1>
            <p className="font-semibold text-gray-400">Capstone Management System</p>
            <form className="mt-8 space-y-6">
                <div>
                    <label className="block text-sm font-medium text-white">Email</label>
                    <input type="email" className="w-full text-white px-4 py-2 mt-2 border  border-gray-500 rounded-md" />
                </div>
                <div className="relative mt-3 ">
                    <div className="flex ">
                         <label className="block text-sm font-medium text-white">Password</label>
                        <a href="" className="text-blue-500 text-sm ml-auto">Forgot Password?</a>
                    </div>
                   
                    <input type="password" className="w-full text-white px-4 py-2 mt-2 border border-gray-500 rounded-md" />
                   
                    <a href="/Dashboard" className="w-full flex items-center justify-center bg-emerald-600 text-white px-4 py-2 mt-6 rounded-md hover:bg-emerald-700 transition-colors duration-300">
                        Sign in
                    </a>
                        <p className="mt-4 text-sm text-gray-400">Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>
                </div>
            </form>
        </div>
    </div>
  );
}
