"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer");
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Logging in...");
    setSuccess(false);
    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        setStatus("Login successful!");
        setSuccess(true);
        localStorage.setItem("loggedIn", "true");
        router.push("/dashboard");
      } else {
        setStatus("Invalid credentials");
      }
    } catch {
      setStatus("Error logging in");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full space-y-6 border border-gray-100">
        <h1 className="text-3xl font-extrabold mb-2 text-center text-indigo-700 tracking-tight">Sign In</h1>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Username</label>
          <input value={username} onChange={e => setUsername(e.target.value)} required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Role</label>
          <select value={role} onChange={e => setRole(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition">
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <Button type="submit" className="w-full text-base font-semibold">Login</Button>
        <div className="text-sm text-center text-gray-500">Don't have an account? <Link href="/signup" className="underline text-indigo-600">Sign up</Link></div>
        <div className={`text-center text-sm min-h-[1.5em] ${success ? "text-green-600" : status && !success ? "text-red-500" : ""}`}>{status}</div>
      </form>
    </div>
  );
}
