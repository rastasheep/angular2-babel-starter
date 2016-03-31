import { Component, Input } from 'angular2/core';
import { RouteConfig, RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';

import { Greeter } from './shared/data.service';

@Component({
  selector: 'hello',
  template: '<p>{{ message }}</p>',
})
export class Hello {
  constructor(greeter: Greeter) {
    this.message = greeter.say('hello', 'Angular 2');
  }
}

@Component({
  selector: 'ciao',
  template: '<p>{{ message }}</p>',
})
export class Ciao {
  constructor(greeter: Greeter, routeParams: RouteParams) {
    this.message = greeter.say('Ciao', routeParams.get('name'));
  }
}

@Component({
  selector: 'linker',
  template: '<p><a [href]="url" [title]="name">{{ name }}</a></p>',
})
export class Linker {
  @Input() name;
  @Input() url;
}

@Component({
  selector: 'hello-app',
  directives: [ROUTER_DIRECTIVES, Linker],
  template: `
    <ul>
      <li><a [routerLink]="['/Hello']">Hello</a></li>
      <li><a [routerLink]="['/Ciao', { name: 'ng2' }]">Ciao</a></li>
    </ul>
    <router-outlet></router-outlet>
    Find me at:
    <linker name="GitHub" url="https://github.com/rastasheep/angular2-babel-starter"></linker>
  `,
})
@RouteConfig([
  { path: '/', component: Hello, name: 'Hello' },
  { path: '/ciao/:name', component: Ciao, name: 'Ciao' },
])
export class HelloApp {
}
