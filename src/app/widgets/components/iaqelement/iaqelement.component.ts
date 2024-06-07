import { Component, Input } from '@angular/core';

@Component({
  selector: 'epneo-iaqelement[id][title][unit]',
  templateUrl: './iaqelement.component.html',
  styleUrls: ['./iaqelement.component.scss']
})
export class IAQElementComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() unit!: string;
  @Input() value?: number;

  // Implement to receive the new value and update the state accordingly
}
