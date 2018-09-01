

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SkyhookDndModule } from "@skyhook/core";
import { SortedComponent } from './sorted.component';
import { CardComponent, CardInnerDirective } from './card.component';
import { UtilityModule } from '../utility.module';
import { SkyhookMultiBackendModule } from '@skyhook/multi-backend';

@NgModule({
  declarations: [
      CardComponent, CardInnerDirective, SortedComponent
  ],
  imports: [
    CommonModule,
    SkyhookDndModule,
    SkyhookMultiBackendModule,
    RouterModule.forChild([{ path: '', component: SortedComponent }]),
    UtilityModule
  ],
})
export class Module { }
