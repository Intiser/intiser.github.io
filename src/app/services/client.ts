import { HttpClient } from "@angular/common/http";

const defaultHeaders = {
    'Content-Type': 'application/json',
  };
export class Client {

    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
      }

}