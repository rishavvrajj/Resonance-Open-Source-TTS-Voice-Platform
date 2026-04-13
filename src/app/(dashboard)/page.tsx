import DashboardSidebar from "@/features/dashboard/components/dashboard-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
export default function DashboardPage() {
  return (
    <div className="flex flex-1 items-center justify-center ">
        <h1 className="text-2xl font-semibold">
            <DashboardSidebar/>
            <SidebarTrigger className="ml-auto" />
            Dashboard
        </h1>
    </div>
  );
}
