import {Component} from '@angular/core';
import {LoginFormService} from "../service/login-form.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  formGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  constructor(
    private loginFormService: LoginFormService,
    private router: Router
  ) {
  }

  login() {
    if (this.formGroup.valid) {
      this.loginFormService.login(this.formGroup.value).subscribe((response) => {
        localStorage.setItem('token', response.prefix + ' ' + response.token);
        this.router.navigate(['/']);
        console.log(response);
      })
    } else {
      console.log('hata')
    }
  }

  userDetail() {
    this.loginFormService.user().subscribe((a) => {
      console.log(a)
    })
  }
}
