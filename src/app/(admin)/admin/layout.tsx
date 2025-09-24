import { AdminSidebar } from "@/features/admin/components/AdminSidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 lg:ml-64 p-6 bg-gray-50">
        {children}
      </main>
    </div>
  )
}
