import {
    PostResponse,
    PostRequest,
    MenuItem,
    CategoryResponse,
    CategoryRequest,
    TagRequest,
    TagResponse,
    THEME,
    User,
    SearchRequest,
    SearchReponse,
    Media,
    Post
} from 'src/app/services/wordpress.interface';
import { Mock } from './mock';
import { global } from '@angular/compiler/src/util';
import { Observable, of } from 'rxjs';

export class WordpressServiceStub {

    public URL: string;
    public THEME = Mock.getTHEME();
    public TRANSLATION: any;

    constructor() {
        this.URL = `${global.BASE_HREF}/wp-json/wp/v2/`;
    }

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
        return 'mock';
    }

    public hasLogo(location: 'header' | 'footer' = 'header', breakpoint: 'desktop' | 'mobile' = 'desktop'): boolean {
        return true;
    }

    public getPosts(params: PostRequest, type: string = 'posts'): Observable<PostResponse> {
        return of<PostResponse>(Mock.PostResponse());
    }

    public getPost(id: number): Observable<Post> {
        return of<Post>(Mock.Post());
    }

    public getUser(id: number, size = 96): Observable<User> {
        return of<User>(Mock.User());
    }

    public getMenu(location: string): Observable<MenuItem[]> {
        return of<MenuItem[]>([
            Mock.getMenuItem()
        ]);
    }

    public getMedia(id: number): Observable<Media> {
        return of<Media>(Mock.Media());
    }

    public search(req: SearchRequest): Observable<SearchReponse> {
        return of<SearchReponse>(Mock.SearchReponse());
    }

    public getCategories(req: CategoryRequest): Observable<CategoryResponse> {
        return of<CategoryResponse>(Mock.CategoryResponse());
    }

    public getTags(req: TagRequest): Observable<TagResponse> {
        return of<TagResponse>(Mock.TagResponse());
    }
}
