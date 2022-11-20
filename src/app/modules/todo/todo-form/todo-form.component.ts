import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoFormService} from "../service/todo-form.service";
import {StoreModel, StoreRequestModel} from "../model/store";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  formGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required)
  })


  constructor(
    private service: TodoFormService,
    private toastr: ToastrService
  ) {
  }

  store() {
    if (this.formGroup.valid) {
       // @ts-ignore
      this.service.store(this.formGroup.value).subscribe((response: StoreModel) => {
        this.formGroup.reset();
         this.toastr.success(response.message);
      })
    }
  }
}
