import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoFormService} from "../service/todo-form.service";
import {StoreModel} from "../model/store";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  formGroup: FormGroup;


  constructor(
    private service: TodoFormService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
      this.formGroup = new FormGroup({
        title: new FormControl(null, Validators.required),
        content: new FormControl(null, Validators.required)
      });
  }

  store() {
    if (this.formGroup.valid) {
      this.service.store(this.formGroup.value).subscribe((response: StoreModel) => {
        this.formGroup.reset();
        this.toastr.success(response.message);
      })
    }
  }
}
