"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2, Lock } from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      router.push("/admin");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted/20 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-background p-8 rounded-xl border border-border shadow-xl">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Lock className="w-6 h-6 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl font-serif text-center font-semibold mb-2 text-foreground">Admin Access</h1>
        <p className="text-center text-muted-foreground mb-8 text-sm">Enter the dashboard password to continue.</p>

        {error && (
          <div className="mb-6 p-3 bg-red-50 text-red-600 rounded-md border border-red-200 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-foreground">Password</label>
            <input 
              id="password" 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-11 px-4 border border-border bg-background focus:outline-none focus:border-primary transition-colors rounded-md"
              required
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full h-11">
            {loading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Authenticating...</> : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}
