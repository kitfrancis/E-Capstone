import { useState } from 'react';

export default function Signup() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState(""); 

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault(); 

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const body = { username, email, password };
            const response = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                alert("Registration Successful!");
                window.location.href = "/login";
            } else {
                alert(data);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-900">
            <div>
                <div className="flex justify-center items-center">
                    <img src="/src/assets/react.svg" alt="E-Capstone Logo" className="h-15 w-20 border mb-4 rounded-4xl" />
                </div>
              
                <h1 className="text-3xl font-semibold text-gray-300 text-center">Sign up to E-Capstone</h1>
                <p className="font-semibold text-gray-400 text-center">Capstone Management System</p>
                
                <form className="mt-8 space-y-6" onSubmit={handleRegister}>
                    <div>
                        <label className="block text-sm font-medium text-white">Username</label>
                        <input 
                            type="text" 
                            required
                            className="w-full text-white px-4 py-2 mt-2 border border-gray-500 rounded-md bg-transparent"
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white">Email</label>
                        <input 
                            type="email" 
                            required
                            className="w-full text-white px-4 py-2 mt-2 border border-gray-500 rounded-md bg-transparent"
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="mt-3">
                        <label className="block text-sm font-medium text-white">Password</label>
                        <input 
                            type="password" 
                            required
                            className="w-full text-white px-4 py-2 mt-2 border border-gray-500 rounded-md bg-transparent"
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        
                        <label className="block text-sm font-medium text-white mt-6">Confirm Password</label>
                        <input 
                            type="password" 
                            required
                            className="w-full text-white px-4 py-2 mt-2 border border-gray-500 rounded-md bg-transparent"
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />

                        <button 
                            type="submit"
                            className="w-full flex items-center justify-center bg-emerald-600 text-white px-4 py-2 mt-6 rounded-md hover:bg-emerald-700 transition-colors duration-300"
                        >
                            Sign up
                        </button>
                        
                        <p className="mt-4 text-sm text-gray-400">
                            Already have an account? <a href="/login" className="text-blue-500">Login here!</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}