import { House, Search, Share2 } from "lucide-react";

import type { ISiderBarHeadConfig } from "./interface";

export const SIDERBAR_HEADER_CONFIF: ISiderBarHeadConfig[] = [
	{
		icon: <Search />,
		name: "搜索"
	},
	{
		icon: <House />,
		name: "首页"
	},
	{
		icon: <Share2 />,
		name: "我的分享"
	}
];
