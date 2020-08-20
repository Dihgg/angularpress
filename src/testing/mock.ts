import {
    THEME,
    Post,
    User,
    MenuItem,
    SearchReponse,
    Media,
    SearchItem,
    PostResponse,
    Image,
    CategoryResponse,
    Category,
    TagResponse,
    Tag
} from 'src/app/services/wordpress.interface';
import { ElementRef } from '@angular/core';
import { of } from 'rxjs';

export class Mock {

    static getTHEME(): THEME {
        return {
            NAME: 'MOCK',
            TEMPLATE_URI: 'http://mockurl.com/mock',
            logos: {
                header: {
                    mobile: 'http://mockurl.com/mock',
                    desktop: 'http://mockurl.com/mock',

                },
                footer: {
                    mobile: 'http://mockurl.com/mock',
                    desktop: 'http://mockurl.com/mock'
                }
            },
            options: {
                header: {
                    socials: true,
                },
                footer: {
                    socials: true,
                    disclaimer: true
                },
                posts_per_page: 12
            }
        };
    }

    static Post(): Post {
        return {
            id: 1,
            title: 'mock',
            url: 'http://mockurl.com/mock',
            date: new Date(),
            author: 1,
            content: 'mock content',
            excerpt: 'mock excerpt',
            date_formatted: '01/01/1970'
        };
    }

    static PostResponse(): PostResponse {
        return {
            pages: 1,
            total: 1,
            posts: [
                Mock.Post()
            ]
        };
    }

    static getMenuItem(object: any = {}, items: MenuItem[] = []): MenuItem {
        return Object.assign<any, MenuItem>({
            ID: 1,
            classes: ['mock-class'],
            target: '',
            title: 'Mock',
            type: 'post',
            url: 'http://mockurl.com/mock',
            items
        }, object);
    }

    static User(): User {
        return {
            id: 1,
            name: 'Jane Doe',
            link: 'http://mockurl.com/mock',
            avatar: 'http://mockurl.com/mock',
            slug: 'jane-doe'
        };
    }

    static Image(): Image {
        return {
            size: 'thumbnail',
            width: 150,
            height: 150,
            caption: 'mock caption',
            url: 'http://mockurl.com',
            alt: 'alt mock'
        };
    }

    static Images(): Image[] {
        const images: Image[] = [];
        ['thumbnail'].forEach((size: string) => {
            images[size] = Mock.Image();
        });
        return images;
    }

    static Media(): Media {
        return {
            id: 1,
            sizes: Mock.Images(),
            type: 'attachment',
            url: 'http://mockurl.com/mock',
            caption: 'mock caption',
            alt_text: 'alt mock'
        };
    }

    static SearchItem(): SearchItem {
        return {
            id: 1,
            subtype: 'post',
            title: 'mock title',
            type: 'post',
            url: 'http://mockurl.com/mock'
        };
    }

    static SearchReponse(): SearchReponse {
        return {
            pages: 1,
            total: 2,
            results: [
                Mock.SearchItem()
            ]
        };
    }

    static Category(): Category {
        return {
            id: 1,
            slug: 'mock',
            count: 1,
            description: 'mock decription',
            link: 'http://mockurl.com/mock',
            name: 'Mock',
            taxonomy: 'mock',
            parent: 0
        };
    }

    static CategoryResponse(): CategoryResponse {
        return {
            pages: 1,
            total: 1,
            categories: [
                Mock.Category()
            ]
        };
    }

    static Tag(): Tag {
        return {
            id: 1,
            slug: 'mock',
            count: 1,
            description: 'mock decription',
            link: 'http://mockurl.com/mock',
            name: 'Mock',
            taxonomy: 'mock'
        };
    }

    static TagResponse(): TagResponse {
        return {
            pages: 1,
            total: 2,
            tags: [Mock.Tag()]
        };
    }

    static ElementRef(): ElementRef {
        const element = new ElementRef(null);
        element.nativeElement = {
            firstChild: {
                offsetHeight: 0
            },
            focus: () => { },
            submit: () => { }
        };
        return element;
    }

    static ActivatedRoute() {
        return {
            snapshot: {
                paramMap: {
                    get: (name: string): string => 'stub'
                }
            },
            queryParams: of((cb) => {
                cb({
                    query: 'mock'
                });
            })
            /* queryParams: ({
                subscribe: (cb) => {
                    cb({
                        query: 'mock'
                    });
                }
            }) */
        };
    }
}

export class Title {
    title: string;

    public setTitle(title: string) {
        this.title = title;
    }

    public getTitle(): string {
        return this.title;
    }

}
