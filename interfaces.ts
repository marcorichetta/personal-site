import { Dispatch, SetStateAction } from "react";

export interface IToggleProps {
	isMenuOpen: boolean;
	setisMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export interface ITech {
	name: string;
	icon: string;
	url: string;
}

export interface ISocial {
	name: string;
	icon: string;
	url: string;
}

export interface IRepo {
	name: string;
	course?: {
		name: string;
		url: string;
	};
	date: string;
	url: string | null;
	source: string;
	imgSource: string;
	credentials?: {
		user: string;
		pass: string;
	};
	description: string;
	tags: Array<string>;
}

export interface IFrontMatter {
    image: any;
    readingTime: any;
    title: string;
    summary: string; 
    slug: string; 
    createdAt: string;
	tags: Array<string>;
}

export interface IPost {
	frontMatter: IFrontMatter;
	children: React.ReactNode;
}