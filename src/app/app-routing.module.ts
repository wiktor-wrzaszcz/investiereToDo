import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiListComponent } from './multi-list/multi-list.component';
import { SingleListComponent } from './single-list/single-list.component';

const routes: Routes = [
  { path: 'toDoLists', component: MultiListComponent },
  { path: 'toDoList/:id', component: SingleListComponent},
  { path: '**', redirectTo: 'toDoLists', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
