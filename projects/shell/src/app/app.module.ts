import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ROUTES } from '@angular/router';
import { createNavigationNodes, createRoutes } from './util/route-factory';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: ROUTES,
      useFactory: () => [...createRoutes(), { path: '**', redirectTo: '' }],
      multi: true,
    },
    {
      provide: 'CUSTOM_NAVIGATION_NODES',
      useFactory: () => createNavigationNodes(),
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
