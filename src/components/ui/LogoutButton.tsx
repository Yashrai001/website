"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  return (
    <button 
      onClick={async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/admin/login');
        router.refresh();
      }}
      className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors text-left"
    >
      <LogOut className="w-5 h-5" />
      Sign Out
    </button>
  );
}
