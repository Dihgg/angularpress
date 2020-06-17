export interface User {
	id: string;
	name: string;
	link: string;
	slug: string;
	avatar: string;
}

export interface PostArgs {
	order?: 'asc' | 'desc';
	orderBy?: string;
	per_page?: number;
}

export interface Post {
	id: string;
	url: string;
	date: Date;
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
	type: 'post' | 'custom';
	title: string;
	url: string;
	classes: string[];
	target: string;
	urlRouter?: string;
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
}
export interface Media {
	id: number;
	url: string;
	sizes: Image[];
	type: 'image' | string;
	caption?: string;
	alt_text?: string;

}