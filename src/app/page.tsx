import Sidebar from "@/components/SiderBar";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup
} from "@/components/ui/resizable";
import Tiptap from "@/features/editor/Tiptap";

export default function Home() {
	return (
		<div className="h-screen w-full">
			<ResizablePanelGroup direction="horizontal" className="h-full w-full">
				<ResizablePanel defaultSize={10} maxSize={15} minSize={10}>
					<Sidebar />
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize={90}>
					<Tiptap />
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	);
}
