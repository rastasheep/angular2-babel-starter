import { Component, Input } from 'angular2/core';

@Component({
  selector: 'linker',
  template: '<p><a [href]="url" [title]="name">{{ name }}</a></p>',
})
export class Linker {
  @Input() name;
  @Input() url;
}

