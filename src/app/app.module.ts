import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CustomEllipseDirective} from './custom-ellipse.directive'
import {DotDotDotPipe}  from './custom.pipe';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent,CustomEllipseDirective,DotDotDotPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
