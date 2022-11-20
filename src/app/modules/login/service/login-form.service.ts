import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

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

  user(): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>('http://angular-backend.test/api/user', { observe: 'response' })
  }
}
