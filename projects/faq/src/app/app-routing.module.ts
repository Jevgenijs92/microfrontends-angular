import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqDetailsComponent } from './faq-details/faq-details.component';
import { FaqListComponent } from './faq-list/faq-list.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: FaqListComponent,
  },
  {
    path: ':id',
    component: FaqDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
