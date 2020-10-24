import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModuleRoutingModule } from './menu-module-routing.module';
 
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
 
 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModuleRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class MenuModuleModule { }
