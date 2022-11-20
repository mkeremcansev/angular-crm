import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StoreRequestModel} from '../model/store'

@Injectable({
  providedIn: 'root'
})
export class TodoFormService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  store(formData: StoreRequestModel) {
    return this.httpClient.post('http://angular-backend.test/api/todo/store', formData);
  }
}
