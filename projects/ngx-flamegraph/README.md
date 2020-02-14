# ngx-flamegraph

Flame graph for Angular. With this package you can visualize stack traces.

## Usage

```shell script
npm i ngx-flamegraph --save
```

In your app import the `NgxFlamegraphModule`:

```ts
import { NgxFlamegraphModule } from 'ngx-flamegraph';

@NgModule({
  imports: [NgxFlamegraphModule],
  // ...
})
export class AppModule {}
```

Use the `ngx-flamegraph` component:

```ts
import {Component, OnInit} from '@angular/core';

interface Data {
  value: number;
  label: string;
  children: Data[];
  color?: string;
}

@Component({
  selector: 'app-root',
  template: `
    <ngx-flamegraph
       [data]="data"
       [frameClick]="handleClick($event)"
       [frameMouseEnter]="handleMouseEnter($event)"
       [frameMouseLeave]="handleMouseLeave($event)"
       [width]="width"
       [height]="200">
    </ngx-flamegraph>
  `
})
export class AppComponent implements OnInit {
  width = window.innerWidth - 100;
  data = [
    {
      label: 'root',
      value: 10,
      children: [
        { label: 'foo', value: 8, children: [] },
        { label: 'bar', value: 8, color: '#ff0000', children: [] },
      ]
    }
  ];

  handleClick(entry: Data) {
    // ...
  }

  handleMouseEnter(entry: Data) {
    // ...
  }

  handleMouseLeave(entry: Data) {
    // ...
  }
}
```

## Related work

`ngx-flamegraph` was inspired by the following prior work:

- [FlameGraph](https://github.com/brendangregg/FlameGraph)
- [CPU Flame Graphs](http://www.brendangregg.com/FlameGraphs/cpuflamegraphs.html)
- [D3 flame graph](https://github.com/spiermar/d3-flame-graph)
- [Flame graph by MapBox](https://github.com/mapbox/flamebearer)
- [React Flame Graph](https://github.com/bvaughn/react-flame-graph)

## License

MIT
