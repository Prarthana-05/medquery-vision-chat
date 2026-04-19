import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { FilesSidebar } from "@/components/dashboard/FilesSidebar";
import { ChatPanel } from "@/components/dashboard/ChatPanel";
import { SourcePanel } from "@/components/dashboard/SourcePanel";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <DashboardNav />
      <main className="flex-1 p-3 md:p-4">
        <div className="grid h-[calc(100vh-5.5rem)] grid-cols-1 gap-3 md:gap-4 lg:grid-cols-[280px_1fr_320px] xl:grid-cols-[300px_1fr_360px]">
          <div className="hidden lg:block">
            <FilesSidebar />
          </div>
          <div className="min-h-[60vh]">
            <ChatPanel />
          </div>
          <div className="hidden lg:block">
            <SourcePanel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
