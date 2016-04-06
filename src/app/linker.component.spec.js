import { Component } from 'angular2/core';
import {
  AsyncTestCompleter,
  beforeEachProviders,
  describe,
  expect,
  inject,
  it,
  TestComponentBuilder,
} from 'angular2/testing_internal';

import { Linker } from './linker.component';

describe('Linker', () => {
  beforeEachProviders(() => []);

  @Component({
    template: '<linker url="http://foo.com" name="Foo"></linker>',
    directives: [Linker],
  })
  class Parent {}

  it('renders a link with given attributes', inject([TestComponentBuilder, AsyncTestCompleter],
    (tcb, async) => {
      tcb.createAsync(Parent)
      .then((fixture) => {
        fixture.detectChanges();

        const linker = fixture.debugElement.children[0];

        const instance = linker.componentInstance;
        expect(instance.name).toEqual('Foo');
        expect(instance.url).toEqual('http://foo.com');

        const anchor = linker.nativeElement.querySelector('a');
        expect(anchor.href).toEqual('http://foo.com/');
        expect(anchor.title).toEqual('Foo');
        expect(anchor).toHaveText('Foo');

        async.done();
      });
    }));
});
