import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) {
  }

  isLoggedIn(): boolean {
    let status = false;
    this.httpClient.get('http://angular-backend.test/api/user', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('token')}`
      }
    }).subscribe((r) => {

    });
    console.log(status)
    if (!status) {
      return true;
    } else {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
