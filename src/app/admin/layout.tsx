import Link from "next/link";
import { LayoutDashboard, Users, CalendarDays, Settings } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { LogoutButton } from "@/components/ui/LogoutButton";

export const metadata = {
  title: `Admin Dashboard | ${siteConfig.name}`,
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/20 flex flex-col md:flex-row font-sans">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-background border-r border-border flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <span className="font-serif text-xl font-bold tracking-widest uppercase text-foreground">
            Luxe <span className="text-primary">Admin</span>
          </span>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            <li>
              <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary font-medium">
                <LayoutDashboard className="w-5 h-5" />
                Dashboard
              </Link>
            </li>
            <li>
              <button disabled className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted transition-colors opacity-50 cursor-not-allowed text-left">
                <CalendarDays className="w-5 h-5" />
                Events
              </button>
            </li>
            <li>
              <button disabled className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted transition-colors opacity-50 cursor-not-allowed text-left">
                <Users className="w-5 h-5" />
                Clients
              </button>
            </li>
            <li>
              <button disabled className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted transition-colors opacity-50 cursor-not-allowed text-left">
                <Settings className="w-5 h-5" />
                Settings
              </button>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-border space-y-2">
          <Link href="/" className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            Back to Site
          </Link>
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-16 bg-background border-b border-border flex items-center justify-between px-6 lg:px-10 shrink-0">
          <h1 className="text-xl font-semibold text-foreground">Dashboard Overview</h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
              AD
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-6 lg:p-10">
          {children}
        </div>
      </main>

    </div>
  );
}
