import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FaqAppComponent } from './faq-app.component';

@NgModule({
  declarations: [
    FaqAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [FaqAppComponent]
})
export class AppModule { }
