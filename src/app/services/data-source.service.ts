import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataSourceService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get('https://api.publicapis.org/entries');
  }
}
