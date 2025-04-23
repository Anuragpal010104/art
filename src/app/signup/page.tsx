"use client";
import { useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer");
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Signing up...");
    setSuccess(false);
    try {
      const res = await fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, role }),
      });
      if (res.ok) {
        setStatus("Signup successful! You can now log in.");
        setSuccess(true);
      } else {
        const data = await res.json();
        setStatus(data.detail || "Signup failed");
      }
    } catch {
      setStatus("Error signing up");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full space-y-6 border border-gray-100">
        <h1 className="text-3xl font-extrabold mb-2 text-center text-indigo-700 tracking-tight">Sign Up</h1>
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
        <Button type="submit" className="w-full text-base font-semibold">Sign Up</Button>
        <div className="text-sm text-center text-gray-500">Already have an account? <Link href="/login" className="underline text-indigo-600">Login</Link></div>
        <div className={`text-center text-sm min-h-[1.5em] ${success ? "text-green-600" : status && !success ? "text-red-500" : ""}`}>{status}</div>
      </form>
    </div>
  );
}
