import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinValidationErrorsPipe } from './join-array.pipe';



@NgModule({
  declarations: [
    JoinValidationErrorsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JoinValidationErrorsPipe
  ]
})
export class PipesModule { }
