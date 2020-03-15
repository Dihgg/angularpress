export interface User {
	id: string;
	name: string;
	link: string;
	slug: string;
	avatar: string;
}

export interface Post {
	id: string;
	date: Date;
	title: string;
	content: string;
	excerpt: string;
	author: number;
	categories?: number[];
	tags?: number[]
}