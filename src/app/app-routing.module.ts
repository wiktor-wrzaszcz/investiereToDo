import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'toDoLists', loadChildren: () => import('./multi-list/multi-list.module').then(m => m.MultiListModule)},
  { path: 'toDoList/:id', loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule)},
  { path: '**', redirectTo: 'toDoLists', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
