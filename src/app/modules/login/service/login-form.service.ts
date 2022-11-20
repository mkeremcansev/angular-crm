import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  login(data: Partial<{ email: any; password: any; }>) {
    return this.httpClient.post<Partial<{ token: string; prefix: string; }>>('http://angular-backend.test/api/login', data);
  }

  user() {
    return this.httpClient.get('http://angular-backend.test/api/user')
  }
}
