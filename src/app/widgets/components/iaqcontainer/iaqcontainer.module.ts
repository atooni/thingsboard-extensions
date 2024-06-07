import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '@shared/public-api';
import { IAQContainerComponent } from './iaqcontainer.component';
import { IAQElementModule } from '../iaqelement/iaqelement.module';

@NgModule({
  declarations: [
    IAQContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IAQElementModule
  ],
  exports: [
    IAQContainerComponent
  ]
})
export class IAQContainerModule { }
