import { Sidebar } from "../../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-900 fixed h-full">
        <Sidebar />
      </div>
      <main className="flex-1 ml-64">{children}</main>
    </div>
  );
}
