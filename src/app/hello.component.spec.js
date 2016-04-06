import {
  AsyncTestCompleter,
  beforeEachProviders,
  describe,
  expect,
  inject,
  it,
  TestComponentBuilder,
} from 'angular2/testing_internal';

import { Greeter } from './shared/data.service';
import { Hello } from './hello.component';

describe('Hello', () => {
  beforeEachProviders(() => [Greeter]);

  it('renders greeting', inject([TestComponentBuilder, AsyncTestCompleter], (tcb, async) => {
    tcb.createAsync(Hello)
      .then((fixture) => {
        fixture.detectChanges();

        expect(fixture.debugElement.nativeElement).toHaveText('Hello, Angular 2!');

        async.done();
      });
  }));
});
