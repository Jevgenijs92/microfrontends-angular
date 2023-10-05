import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ROUTES } from '@angular/router';
import { createRoutes } from './util/route-factory';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: ROUTES,
      useFactory: () => createRoutes(),
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
