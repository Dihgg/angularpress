export interface PostOptions {
	showDate: boolean;
    showContent: boolean;
    contentType: 'full_post' | 'excerpt';
    excerpt: number;
}