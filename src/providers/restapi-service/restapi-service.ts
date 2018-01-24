import { HttpClient ,HttpHeaders} from '@angular/common/http';

import { Injectable } from '@angular/core';



/*
  Generated class for the RestapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let apiUrl = "http://localhost:8000/api/lend_user"
@Injectable()
export class RestapiServiceProvider {
  constructor(public http: HttpClient) {
    console.log('Hello RestapiServiceProvider Provider');
  }

  saveUser(data) {
    console.log(data)
    var headers = new HttpHeaders();
    headers.set("Accept", 'application/json');
    headers.set('Content-Type', 'application/json' );
    headers.set('Access-Control-Allow-Origin', '*');

    return new Promise((resolve, reject) => {
      data = JSON.stringify(data)
      console.log(data)
      
      this.http.post(apiUrl+'/signup',data ,{headers:headers})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
