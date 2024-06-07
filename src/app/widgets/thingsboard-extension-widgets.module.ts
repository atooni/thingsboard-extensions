import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAQElementModule } from './components/iaqelement/iaqelement.module';
import { IAQContainerModule } from './components/iaqcontainer/iaqcontainer.module';
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
    IAQElementModule,
    IAQContainerModule
  ]
})
export class ThingsboardExtensionWidgetsModule {

  constructor() {
  }

}
