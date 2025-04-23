"use client";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Mock signup: just redirect to login
    router.push("/login");
  };

  return (
    <div className="max-w-md mx-auto py-16 px-4">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-xl shadow p-8">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input type="password" required className="w-full border rounded px-3 py-2" />
        </div>
        <button type="submit" className="w-full bg-indigo-700 text-white py-2 rounded hover:bg-indigo-800 transition">Sign Up</button>
      </form>
    </div>
  );
}
