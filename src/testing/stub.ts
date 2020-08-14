import { Component, ElementRef } from '@angular/core';
import { WordpressServiceStub } from './wordpress.stub';
import { Post, THEME } from 'src/app/services/wordpress.interface';

export class Stub {

	static Component(options: Component): any {
		let metadata: Component = {
			selector: options.selector,
			template: options.template || '',
			inputs: options.inputs,
			outputs: options.outputs
		}
		return Component(metadata)( class _ { });
	}

	static ActivatedRoute() {
		return {
			snapshot: {
				paramMap: {
					get: (name: string): string => 'stub'
				}
			},
			queryParams: {
				subscribe: (params: any) => ({
					query: 'mock'
				})
			}
		}
	}

	static ElementRef() {
		return class Mock extends ElementRef {
			constructor() {
				super(null);
			}
		}
	} 

	static Wordpress() {
		return new WordpressServiceStub();
	}
	
}