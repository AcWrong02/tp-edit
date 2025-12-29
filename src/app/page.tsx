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
				<ResizablePanel defaultSize={25} maxSize={30} minSize={15}>
					<div className="flex h-full items-center justify-center p-6">
						<span className="font-semibold">Sidebar</span>
					</div>
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize={75}>
					<Tiptap />
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	);
}
