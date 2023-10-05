import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqAppComponent } from './faq-app.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: FaqAppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
