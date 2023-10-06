import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FaqAppComponent } from './faq-app.component';
import { FaqDetailsComponent } from './faq-details/faq-details.component';
import { RouterModule } from '@angular/router';
import { FaqListComponent } from './faq-list/faq-list.component';

@NgModule({
  declarations: [
    FaqAppComponent,
    FaqDetailsComponent,
    FaqListComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [FaqAppComponent]
})
export class AppModule { }
