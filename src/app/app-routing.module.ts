import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiListComponent } from './multi-list/multi-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'toDoLists', pathMatch: 'full'},
  { path: 'toDoLists', component: MultiListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
