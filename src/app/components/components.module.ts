import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CardComponent,
    FooterComponent,
    NavbarComponent
  ],
  exports:[
    CardComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
