"use client";

import { useState, useEffect } from "react";
import { CalendarDays, TrendingUp, AlertCircle, Loader2 } from "lucide-react";
import { Enquiry, EnquiryStatus } from "@/lib/db";

export default function AdminDashboard() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [statusError, setStatusError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const res = await fetch("/api/enquiries");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        if (!ignore) {
          setEnquiries(data);
        }
      } catch (err: unknown) {
        if (!ignore) {
          setError(err instanceof Error ? err.message : "Failed to fetch enquiries");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    setStatusError("");
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });
      if (!res.ok) throw new Error("Failed to update status");
      
      // Update local state
      setEnquiries(prev => prev.map(eq => eq.id === id ? { ...eq, status: newStatus as EnquiryStatus } : eq));
    } catch {
      setStatusError("Failed to update status. Please try again.");
    }
  };

  if (loading) {
    return <div className="flex h-full items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;
  }

  if (error) {
    return <div className="p-4 bg-red-50 text-red-600 rounded-md border border-red-200">Error: {error}</div>;
  }

  const totalEnquiries = enquiries.length;
  const newEnquiries = enquiries.filter(e => e.status === 'New').length;
  const confirmedEvents = enquiries.filter(e => e.status === 'Confirmed' || e.status === 'Completed').length;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {statusError && (
        <div className="p-4 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 rounded-md border border-red-200 dark:border-red-800 text-sm">
          {statusError}
        </div>
      )}

      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-background p-6 rounded-xl border border-border shadow-sm flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Total Enquiries</p>
            <h3 className="text-3xl font-bold text-foreground">{totalEnquiries}</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
        
        <div className="bg-background p-6 rounded-xl border border-border shadow-sm flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">New Requests</p>
            <h3 className="text-3xl font-bold text-foreground">{newEnquiries}</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
            <AlertCircle className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-background p-6 rounded-xl border border-border shadow-sm flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Confirmed Events</p>
            <h3 className="text-3xl font-bold text-foreground">{confirmedEvents}</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500">
            <CalendarDays className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-background rounded-xl border border-border shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-muted/20">
          <h2 className="text-lg font-semibold text-foreground">Recent Enquiries</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-muted/30 text-muted-foreground">
              <tr>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Contact</th>
                <th className="px-6 py-3 font-medium">Event Details</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {enquiries.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                    No enquiries found.
                  </td>
                </tr>
              ) : (
                enquiries.map((enq) => (
                  <tr key={enq.id} className="hover:bg-muted/10 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-medium text-foreground">{enq.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">ID: {enq.id}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-foreground">{enq.phone}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{enq.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-foreground">{enq.eventType}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{enq.guests} Guests</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-foreground">{enq.date}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        {new Date(enq.createdAt).toLocaleDateString()}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <select 
                        value={enq.status}
                        onChange={(e) => handleStatusChange(enq.id, e.target.value)}
                        className={`text-sm rounded-full px-3 py-1 border outline-none font-medium appearance-none cursor-pointer
                          ${enq.status === 'New' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
                            enq.status === 'Contacted' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                            enq.status === 'Confirmed' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' :
                            enq.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-200' :
                            'bg-red-50 text-red-700 border-red-200'
                          }
                        `}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}
