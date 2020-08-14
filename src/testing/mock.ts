import { THEME, Post } from 'src/app/services/wordpress.interface';

export class Mock {
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
	static getTHEME(): THEME {
		return {
			NAME: 'MOCK',
			TEMPLATE_URI: 'http://mockurl.com/mock',
			logos: {
				mobile: '',
				desktop: '',
				footer: {
					mobile: '',
					desktop: ''
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
		}
	}
}