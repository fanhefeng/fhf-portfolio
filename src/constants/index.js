import logo from "../assets/images/logo.png";
import fhf1 from "../assets/images/card/fhf1.jpeg";
import fhf2 from "../assets/images/card/fhf2.jpeg";
import fhf3 from "../assets/images/card/fhf3.jpeg";
import fhf4 from "../assets/images/card/fhf4.jpeg";
import time1 from "../assets/images/time-line/1.jpeg";
import time2 from "../assets/images/time-line/2.jpeg";
import time3 from "../assets/images/time-line/3.jpeg";
import link_icon from "../assets/images/card2/link_icon.svg";
import card1 from "../assets/images/card2/1.jpeg";
import card2 from "../assets/images/card2/2.jpeg";
import card3 from "../assets/images/card2/3.jpeg";
import card4 from "../assets/images/card2/4.jpeg";
import card5 from "../assets/images/card2/5.jpeg";
import card6 from "../assets/images/card2/6.jpeg";

export const website = {
	title: "FanHefeng",
	short_name: "FHF",
	description: "Personal Portfolio",
	keywords: ["FanHefeng", "FHF", "Frontend Developer"],
	url: "https://fanhefeng.github.io/portfolio",
	logo,
	logoAlt: "logo",
};
export const theLink = {
	name: "链接",
	url: "https://www.baidu.com",
};
export const navLinks = [
	{
		id: "about",
		title: "关于",
	},
	{
		id: "work",
		title: "工作",
	},
	{
		id: "contact",
		title: "联系我",
	},
];
export const hobbies = ["编程", "音乐", "电影", "游戏", "阅读", "旅行", "摄影", "运动"];
export const section2 = {
	title: "关于我",
	subtitle: "个人简介",
	content: "我是一名程序员，1990年出生于山西河津。身高174cm，体重60kg。",
	services: [
		{ title: "生活照", icon: fhf1 },
		{ title: "海边", icon: fhf2 },
		{ title: "薛之谦演唱会", icon: fhf3 },
		{ title: "✋🏻", icon: fhf4 },
	],
};
export const section3 = {
	title: "工作",
	subtitle: "生命轨迹",
	experiences: [
		{
			title: "孩童时期",
			company_name: "山西 | 河津",
			icon: time1,
			iconBg: "#161329",
			date: "1990.11 - 2009.7",
			points: ["略"],
		},
		{
			title: "大学时期",
			company_name: "山西 | 太原",
			icon: time2,
			iconBg: "#161329",
			date: "2009.9 - 2013.7",
			points: ["略"],
		},
		{
			title: "步入社会时期",
			company_name: "太原 | 无锡 | 北京 | 青岛",
			icon: time3,
			iconBg: "#161329",
			date: "2013.9 - 至今",
			points: ["略"],
		},
	],
};
export const technologies = [
	{ name: "HTML 5", icon: fhf1 },
	{ name: "CSS 3", icon: fhf2 },
	{ name: "JavaScript", icon: fhf3 },
	{ name: "Rect JS", icon: fhf4 },
];
export const section4 = {
	title: "工作",
	subTitle: "项目",
	content: "略",
	link_icon,
	link_icon_alt: "link icon",
	projects: [
		{
			name: "名称1",
			description: "描述1",
			tags: [
				{ name: "标签1", color: "blue-text-gradient" },
				{ name: "标签2", color: "green-text-gradient" },
				{ name: "标签3", color: "pink-text-gradient" },
				{ name: "标签4", color: "yellow-text-gradient" },
			],
			image: card1,
			link: "https://www.baidu.com",
		},
		{
			name: "名称2",
			description: "描述2",
			tags: [
				{ name: "标签1", color: "blue-text-gradient" },
				{ name: "标签2", color: "green-text-gradient" },
				{ name: "标签3", color: "pink-text-gradient" },
				{ name: "标签4", color: "yellow-text-gradient" },
			],
			image: card2,
			link: "https://www.baidu.com",
		},
		{
			name: "名称3",
			description: "描述3",
			tags: [
				{ name: "标签1", color: "blue-text-gradient" },
				{ name: "标签2", color: "green-text-gradient" },
				{ name: "标签3", color: "pink-text-gradient" },
				{ name: "标签4", color: "yellow-text-gradient" },
			],
			image: card3,
			link: "https://www.baidu.com",
		},
		{
			name: "名称4",
			description: "描述4",
			tags: [
				{ name: "标签1", color: "blue-text-gradient" },
				{ name: "标签2", color: "green-text-gradient" },
				{ name: "标签3", color: "pink-text-gradient" },
				{ name: "标签4", color: "yellow-text-gradient" },
			],
			image: card4,
			link: "https://www.baidu.com",
		},
		{
			name: "名称5",
			description: "描述5",
			tags: [
				{ name: "标签1", color: "blue-text-gradient" },
				{ name: "标签2", color: "green-text-gradient" },
				{ name: "标签3", color: "pink-text-gradient" },
				{ name: "标签4", color: "yellow-text-gradient" },
			],
			image: card5,
			link: "https://www.baidu.com",
		},
		{
			name: "名称6",
			description: "描述6",
			tags: [
				{ name: "标签1", color: "blue-text-gradient" },
				{ name: "标签2", color: "green-text-gradient" },
				{ name: "标签3", color: "pink-text-gradient" },
				{ name: "标签4", color: "yellow-text-gradient" },
			],
			image: card6,
			link: "https://www.baidu.com",
		},
	],
};

export const contactSection = {
	title: "联系我",
	subtitle: "给我留言",
};
