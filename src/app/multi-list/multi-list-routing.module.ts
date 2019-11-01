import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiListComponent } from './multi-list.component';

const routes: Routes = [{ path: '', component: MultiListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiListRoutingModule { }
