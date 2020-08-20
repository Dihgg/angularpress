export class API {
    static Post(object: any = {}) {
        return Object.assign({
            id: 1,
            link: 'http:\/\/mockurl.com\/mock\/',
            title: {
                rendered: 'mock title'
            },
            date: '2020-02-29T14:09:00',
            date_formatted: '10 de março de 2020',
            excerpt: {
                rendered: 'excerpt mock'
            },
            content: {
                rendered: '<p>mock</p>'
            },
            blocks: [
                {
                    name: 'mock',
                    attrs: {},
                    html: '<p>block mock</p>'
                }
            ],
            author: 1,
            featured_media: 1
        }, object);
    }

    static MenuItem(object: any = {}) {
        return Object.assign({
            ID: 1,
            post_type: 'nav_menu_item',
            post_title: 'Mock',
            url: 'https:\/\/mockurl.com\/mock',
            classes: [],
            target: '',
            menu_item_parent: 0
        }, object);
    }

    static User() {
        return {
            id: 1,
            name: 'admin',
            url: '',
            description: '',
            link: 'http:\/\/mockurl.com\/mock\/post\/author\/admin\/',
            slug: 'admin',
            avatar_urls: {
                24: 'http:\/\/mockurl.com\/mock\/avatar?s=24&d=mm&r=g',
                48: 'http:\/\/mockurl.com\/mock\/avatar?s=48&d=mm&r=g',
                96: 'http:\/\/mockurl.com\/mock\/avatar?s=96&d=mm&r=g'
            }
        };
    }

    static Media() {
        return {
            id: 1,
            media_type: 'image',
            source_url: 'http:\/\/mockurl.com\/mock\/mock.jpg',
            caption: {
                rendered: 'mock caption'
            },
            media_details: {
                sizes: {
                    thumbnail: {
                        file: 'mock-150x150.jpg',
                        width: 150,
                        height: 150,
                        mime_type: 'image\/jpeg',
                        source_url: 'http:\/\/mockurl.com\/mock.jpg'
                    },
                    medium: {
                        file: 'mock-300x169.jpg',
                        width: 300,
                        height: 169,
                        mime_type: 'image\/jpeg',
                        source_url: 'http:\/\/mockurl.com\/mock.jpg'
                    },
                    medium_large: {
                        file: 'mock-768x432.jpg',
                        width: 768,
                        height: 432,
                        mime_type: 'image\/jpeg',
                        source_url: 'http:\/\/mockurl.com\/mock.jpg'
                    },
                    large: {
                        file: 'mock-1024x576.jpg',
                        width: 1024,
                        height: 576,
                        mime_type: 'image\/jpeg',
                        source_url: 'http:\/\/mockurl.com\/mock.jpg'
                    },
                    full: {
                        file: 'mock.jpg',
                        width: 1280,
                        height: 720,
                        mime_type: 'image\/jpeg',
                        source_url: 'http:\/\/mockurl.com\/mock.jpg'
                    }
                },
            },
        };

    }

    static Search() {
        return {
            id: 1,
            title: 'Mock',
            url: 'http:\/\/mockurl.com\/mock\/',
            type: 'post',
            subtype: 'post'
        };
    }

    static Category() {
        return {
            id: 1,
            count: 1,
            description: 'mock description',
            link: 'http:\/\/mockurl\/mock\/',
            name: 'Mock',
            slug: 'mock',
            taxonomy: 'mock',
            parent: 0,
        };
    }

    static Tag() {
        return {
            id: 1,
            count: 1,
            description: 'mock tag',
            link: 'http:\/\/mockurl.com\/mock\/',
            name: 'Mock tag',
            slug: 'mock-tag',
            taxonomy: 'mock_tag'
        };
    }
}
