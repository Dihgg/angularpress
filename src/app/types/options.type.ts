export interface PostOptions {
	showDate: boolean;
    showContent: boolean;
    contentType: 'full_post' | 'excerpt';
    excerpt: number;
    displayFeaturedImage: boolean;
    featuredImageAlign?: "left" | "center" | "right"
    featuredImageSizeHeight?: number
    featuredImageSizeSlug?: "thumbnail" | "medium" | "large" | string
    featuredImageSizeWidth?: number
}