import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {"r_l_name":"","r_l_mobile":"","r_l_email":"","r_l_password":"","r_l_c_password":""}
  constructor(public navCtrl: NavController,public restapiServiceProvider: RestapiServiceProvider) {

  }
  saveUser() {
    this.restapiServiceProvider.saveUser(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

}
