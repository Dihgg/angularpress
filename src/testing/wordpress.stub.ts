import { WordpressService } from 'src/app/services/wordpress.service';
import { PostResponse, PostRequest, Post, MenuItem, CategoriesResponse, CategoriesRequest, TagRequest, TagResponse, THEME } from 'src/app/services/wordpress.interface';
import { Stub } from './stub';
import { Mock } from './mock';

export class WordpressServiceStub {

	public THEME = Mock.getTHEME();
	public TRANSLATION: any;
	
	public setTHEME(options: THEME): void {
		this.THEME = options;
	}

	public setTRANSLATION(translation: any): void {
		this.TRANSLATION = translation;
	}

	public translate(value: string): string {
		return 'mock';
	}

	public setTitle(title: string): void { }

	public getTitle(): string {
		return 'Title Mock';
	}

	public routerLink(url: string): string {
		return "mock";
	}

	public async getPosts(params: PostRequest, type: string = 'posts'): Promise<PostResponse> {
		return new Promise<PostResponse>((resolve, reject) => {
			resolve({
				pages: 1,
				total: 2,
				posts: [
					Mock.Post()
				]
			});
		});
	}

	public async getMenu(location: string): Promise<MenuItem[]> {
		return new Promise<MenuItem[]>((resolve, reject) => {
			resolve([{
				classes: [],
				ID: 1,
				items: [],
				target: '',
				title: 'Mock',
				type: 'post',
				url: 'http://mockurl.com/mock'
			}]);
		});
	}

	public async getCategories(req: CategoriesRequest): Promise<CategoriesResponse> {
		return new Promise<CategoriesResponse>((resolve, reject) => {
			resolve({
				pages: 1,
				total: 2,
				categories: []
			});
		});
	}

	public async getTags(req: TagRequest): Promise<TagResponse> {
		return new Promise<TagResponse>((resolve, reject) => {
			resolve({
				pages: 1,
				total: 2,
				tags: []
			});
		});
	}
}