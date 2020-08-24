import { Component, ElementRef } from '@angular/core';
import { WordpressServiceStub } from './wordpress.stub';
import { Mock } from './mock';
import { RouterEvent } from '@angular/router';
import { ReplaySubject } from 'rxjs';

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

    static EventSubject() {
        return new ReplaySubject<RouterEvent>(1);
    }
    static Router(eventSubject: ReplaySubject<RouterEvent>) {
        return {
            navigate: jest.fn(),
            events: eventSubject.asObservable(),
            url: 'mock/url'
        };
    }

}
