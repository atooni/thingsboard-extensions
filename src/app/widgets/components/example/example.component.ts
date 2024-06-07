///
/// Copyright © 2023 ThingsBoard, Inc.
///

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'epneo-example',
  templateUrl: './example.component.html',
  styleUrls: [
    './example.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit {
  @Input() title?: string;

  constructor() { }

  ngOnInit() {
  }

}
