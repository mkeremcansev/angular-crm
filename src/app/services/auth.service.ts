import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authStatus = false;

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) {
  }

  isLoggedIn(): boolean {
    let status = true;
    this.authControl().subscribe((response) => {
      if (response.status === 401) {
        status = false;
      }
    });
    if (status) {
      return true;
    } else {
      localStorage.removeItem('token')
      this.router.navigate(['/login']);
      return false;
    }
  }

  authControl(): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>('http://angular-backend.test/api/user', {observe: 'response'});
  }
}
