import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StoreModel, StoreRequestModel} from '../model/store'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoFormService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  store(formData: StoreRequestModel): Observable<StoreModel> {
    return this.httpClient.post<StoreModel>('http://angular-backend.test/api/todo/store', formData);
  }
}
