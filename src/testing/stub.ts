import { Component, ElementRef } from '@angular/core';
import { WordpressServiceStub } from './wordpress.stub';
import { Mock } from './mock';

export class Stub {

    static Component(options: Component): any {
        const metadata: Component = {
            selector: options.selector,
            template: options.template || '',
            inputs: options.inputs,
            outputs: options.outputs
        };
        return Component(metadata)(class StubbedClass { });
    }

    static ActivatedRoute() {
        return Mock.ActivatedRoute();
    }

    static ElementRef(): ElementRef {
        return Mock.ElementRef();
    }

    static Wordpress() {
        return new WordpressServiceStub();
    }

}
