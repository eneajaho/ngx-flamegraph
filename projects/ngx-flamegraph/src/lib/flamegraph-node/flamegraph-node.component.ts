import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Data} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[ngx-flamegraph-node]',
  templateUrl: './flamegraph-node.component.html',
  styleUrls: ['./flamegraph-node.component.css']
})
export class FlamegraphNodeComponent {
  @Input() entry: Data;
  @Input() height: number;
  @Input() width: number;
  @Output() zoom = new EventEmitter();

  select() {
    this.zoom.emit(this.entry);
  }
}
