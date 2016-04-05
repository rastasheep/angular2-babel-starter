import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { Greeter } from './shared/data.service';
import { Linker } from './linker.component';
import { Ciao } from './ciao.component';
import { Hello } from './hello.component';

@Component({
  selector: 'hello-app',
  viewProviders: [Greeter],
  directives: [ROUTER_DIRECTIVES, Linker],
  templateUrl: 'app/app.component.html',
})
@RouteConfig([
  { path: '/', component: Hello, name: 'Hello' },
  { path: '/ciao/:name', component: Ciao, name: 'Ciao' },
])
export class HelloApp {}
