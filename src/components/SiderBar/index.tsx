import { SidebarProvider } from "@/components/ui/sidebar";
import SideBarHeader from "./Header";

export default function Sidebar() {
	return (
		<SidebarProvider className="h-full w-full">
			<SideBarHeader />
		</SidebarProvider>
	);
}
