import { Component, Input, ViewEncapsulation } from '@angular/core';

type IAQCategory = {
  id: string;
  unit: string;
  title: string;
  aliases: string[];
};

const validCategories: IAQCategory[] = [
  {
    id: 'co2',
    unit: 'ppm',
    title: 'Co2',
    aliases: ['0004']
  },
  {
    id: 'temp',
    unit: '°C',
    title: 'Temperature',
    aliases: ['0002', 'atmp', 'rtmp']
  },
  {
    id: 'humi',
    unit: '%',
    title: 'Humidity',
    aliases: ['0003', 'rhum, ']
  },
  {
    id: 'pm25',
    unit: 'mg/m3',
    title: 'PM 2.5',
    aliases: ['0000']
  },
  {
    id: 'pm10',
    unit: 'ug/m3',
    title: 'PM 10',
    aliases: ['0005']
  },
  {
    id: 'tvoc',
    unit: 'ppb',
    title: 'TVOC',
    aliases: ['0001']
  }
];

@Component({
  selector: `epneo-iaqcontainer[title]`,
  templateUrl: './iaqcontainer.component.html',
  styleUrls: ['./iaqcontainer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IAQContainerComponent {
  @Input() title!: string;

  get categories(): IAQCategory[]  {
    return validCategories;
  }

  // Listen to data changes
  // data.key.name co2 0000 temp ...

  // Give me the component for that datakey
  // send the new value received to that component

}
