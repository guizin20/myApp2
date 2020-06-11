import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  async logout() {
   
    await firebase.auth().signOut().then(function() {
      console.log("Deslogado");
    }).catch(function(error) {
      console.log(error);
    });
  
}
}
