import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoFormComponent} from "./todo-form/todo-form.component";

const routes: Routes = [
  {
    path: 'create',
    component: TodoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {
}
