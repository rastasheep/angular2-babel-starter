import { provide } from 'angular2/core';
import { RouteParams } from 'angular2/router';
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
import { Ciao } from './ciao.component';

describe('Ciao', () => {
  beforeEachProviders(() => [
    Greeter,
    provide(RouteParams, { useValue: new RouteParams({ name: 'Babel' }) }),
  ]);

  it('renders greeting', inject([TestComponentBuilder, AsyncTestCompleter], (tcb, async) => {
    tcb.createAsync(Ciao)
      .then((fixture) => {
        fixture.detectChanges();

        expect(fixture.debugElement.nativeElement).toHaveText('Ciao, Babel!');

        async.done();
      });
  }));
});

