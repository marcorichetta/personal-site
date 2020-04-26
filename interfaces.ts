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
	url: string;
	source: string;
	imgSource: string;
	credentials?: {
		user: string;
		pass: string;
	};
	description: string;
	tags: Array<string>;
}
