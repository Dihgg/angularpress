interface RestRequest {
	'exclude[]'?: number[];
	'include[]'?: number[];
	id?: number;
	offset?: number;
	order?: 'asc' | 'desc';
	orderBy?: string;
	page?: number;
	per_page?: number;
	search?: string;
	slug?: string;
}

interface RestResponse {
	total: number,
	pages: number,
}

export interface User {
	avatar: string;
	id: number;
	link: string;
	name: string;
	slug: string;
}

export interface PostRequest extends RestRequest {
	categories?: number[];
	categories_exclude?: number[];
	status?: 'publish' | 'future' | 'draft' | 'pending' | 'private' | 'trash';
	tax_relation?: 'AND' | 'OR';
	tags?: number[];
	tags_exclude?: number[];
	sticky?: boolean;
}

export interface PostResponse extends RestResponse {
	posts: Post[]
}
export interface Post {
	id: number;
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

export interface SearchRequest extends RestRequest {
	type?: 'post' | string;
	subtype?: string;
}

export interface SearchItem {
	id: number;
	title: string;
	url: string;
	type: 'post' | string;
	subtype: string;
}

export interface SearchReponse extends RestResponse {
	results: SearchItem[]
}

export interface CategoryRequest extends RestRequest {
	hide_empty?: boolean;
	orderby?: 'id' | 'include' | 'name' | 'slug' | 'include_slugs' | 'term_group' | 'description' | 'count';
	parent?: number;
	post?: number;
}

export interface CategoryResponse extends RestResponse {
	categories: Category[]
}

export interface Category {
	count: number;
	description: string;
	id: number;
	link: string;
	name: string;
	slug: string;
	taxonomy: string;
	parent?: number;
}

export interface TagRequest extends CategoryRequest { }

export interface TagResponse extends RestResponse {
	tags: Tag[]
}

export interface Tag extends Category { }

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
	attrs: string[];
	html: string;
	name: string;
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
	'NAME': string,
	'TEMPLATE_URI': string,
	'logos': {
		'header': {
			'mobile': string;
			'desktop': string;
		};
		'footer': {
			'mobile': string;
			'desktop': string;
		};
	};

	'options': {
		'header': {
			'socials': boolean;
		};
		'footer': {
			'socials': boolean;
			'disclaimer': boolean;
		},
		'posts_per_page': number;
	};
}
