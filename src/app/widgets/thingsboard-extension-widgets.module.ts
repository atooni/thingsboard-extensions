import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleModule } from './components/example/example.module';
import { SharedModule } from '@shared/public-api';
import { HomeComponentsModule } from '@home/components/public-api';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeComponentsModule,
    SharedModule
  ],
  exports: [
    ExampleModule,
  ]
})
export class ThingsboardExtensionWidgetsModule {

  constructor() {
  }

}
