"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  
    if (error) {
      setError("Login failed. Please check your credentials.");
      return;
    }
  
    router.push("/orderlist");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-300">
      <h1 className="text-2xl mb-4">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        className="input mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="input mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-success" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
