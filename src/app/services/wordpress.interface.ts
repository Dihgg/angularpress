export interface User {
	'avatar': string;
	'id': number;
	'link': string;
	'name': string;
	'slug': string;
}

export interface PostArgs {
	'categories'?: number[];
	'exclude[]'?: number[];
	'id'?: number;
	'include[]'?: number[];
	'offset'?: number;
	'order'?: 'asc' | 'desc';
	'orderBy'?: string;
	'per_page'?: number;
	'page'?: number;
	'slug'?: string;
}

export interface Post {
	'id': number;
	'url': string;
	'date': Date;
	'date_formatted': string;
	'title': string;
	'content': string;
	'excerpt': string;
	'author': number;
	'blocks'?: Block[];
	'categories'?: number[];
	'tags'?: number[];
	'thumbnail'?: number;
}

export interface MenuItem {
	'ID': number;
	'type': 'post' | 'custom';
	'title': string;
	'url': string;
	'classes': string[];
	'target': string;
	'urlRouter'?: string;
	'items'?: MenuItem[];
}

export interface Block {
	'attrs': string[];
	'html': string;
	'name': string;
}

export interface Image {
	'size': 'medium' | 'large' | 'thumbnail' | 'medium_large' | 'full' | string,
	'url': string
	'width': number;
	'height': number;
	'alt'?: string;
	'caption'?: string;
}
export interface Media {
	'id': number;
	'url': string;
	'sizes': Image[];
	'type': 'image' | string;
	'caption'?: string;
	'alt_text'?: string;

}

export interface SearchRequest {
	'page'?: number;
	'per_page'?: number;
	'search'?: string;
	'type'?: 'post' | string;
	'subtype'?: string;
}

export interface SearchItem {
	'id': number;
	'title': string;
	'url': string;
	'type': 'post' | string;
	'subtype': string;
}
export interface SearchReponse {
	'total': number,
	'pages': number,
	'results' : SearchItem[]
}

export interface THEME {
	'NAME': string,
	'TEMPLATE_URI': string,
	'logos': {
		'mobile': string;
		'desktop': string;
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
