import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos importados de PrimeNG
import { AvatarModule } from "primeng/avatar";
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";
import { ToolbarModule } from "primeng/toolbar";
import { TooltipModule } from "primeng/tooltip";
import { MenuModule } from "primeng/menu";

//Modulos PrimeNG
const modulesPrimeNG : any = [
  AvatarModule,
  ButtonModule,
  MenubarModule,
  ToolbarModule,
  TooltipModule,
  MenuModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modulesPrimeNG
  ],
  exports: [
    modulesPrimeNG
  ]
})
export class PrimengModule { }
