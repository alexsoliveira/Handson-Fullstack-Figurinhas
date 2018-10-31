import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColecionadorService } from './services/colecionador.service';

import { AppComponent } from './app.component';
import { AddProductComponent } from './product/add/add.component';
import { EditProductComponent } from './product/edit/edit.component';
import { ProductListComponent } from './product/list/index.component';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    EditProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule
  ],
  providers: [ ColecionadorService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }