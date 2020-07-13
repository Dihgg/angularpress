import { TRANSLATIONS } from '@angular/core';

export interface User {
	id: string;
	name: string;
	link: string;
	slug: string;
	avatar: string;
}

export interface PostArgs {
	id?: number;
	slug?: string;
	order?: 'asc' | 'desc';
	orderBy?: string;
	per_page?: number;
	categories?: number[];
}

export interface Post {
	id: string;
	url: string;
	date: Date;
	date_formatted: string;
	title: string;
	content: string;
	excerpt: string;
	author: number;
	blocks?: Block[];
	categories?: number[];
	tags?: number[];
	thumbnail?: number;
}

export interface MenuItem {
	ID: number;
	type: 'post' | 'custom';
	title: string;
	url: string;
	classes: string[];
	target: string;
	urlRouter?: string;
	items?: MenuItem[];
}

export interface Block {
	name: string;
	attrs: string[];
	html: string;
}

export interface Image {
	size: 'medium' | 'large' | 'thumbnail' | 'medium_large' | 'full' | string,
	url: string
	width: number;
	height: number;
	alt?: string;
	caption?: string;
}
export interface Media {
	id: number;
	url: string;
	sizes: Image[];
	type: 'image' | string;
	caption?: string;
	alt_text?: string;

}

export interface THEME {
	TEMPLATE_URI: string,	

	logos: {
		mobile: string;
		desktop: string;
		footer: {
			mobile: string;
			desktop: string;
		};
	};

	options: {
		header: {
			socials: boolean;
		};
		footer: {
			socials: boolean;
			disclaimer: boolean;
		} 
	};
}

/* export interface TRANSLATION {
	term: string;
	translation?: string;
} */