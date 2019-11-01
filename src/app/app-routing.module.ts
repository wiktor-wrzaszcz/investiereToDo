import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiListModule } from './multi-list/multi-list.module';


const routes: Routes = [
  // synchronous load, because its base module shared with others
  { path: 'toDoLists', loadChildren: () => MultiListModule },
  { path: 'toDoList/:id', loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule)},
  { path: '**', redirectTo: 'toDoLists', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
