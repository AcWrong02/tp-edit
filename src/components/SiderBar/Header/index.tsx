import {
	Sidebar,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from "@/components/ui/sidebar";
import { SIDERBAR_HEADER_CONFIF } from "./config";

export default function Header() {
	return (
		<Sidebar collapsible="none" className="h-full w-full">
			<SidebarHeader>
				<SidebarMenu>
					{SIDERBAR_HEADER_CONFIF.map((config) => (
						<SidebarMenuItem key={config.name}>
							<SidebarMenuButton className="p-1.5">
								{config.icon}
								<span>{config.name}</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarHeader>
		</Sidebar>
	);
}
