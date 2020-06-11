import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario: any;

  constructor(private afa: AngularFireAuth, private afs: AngularFirestore) { 
    this.usuario = this.afs.collection<User>('usuario');
  }

  login(user: User) {
    return this.afa.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: User) {
    return this.afa.createUserWithEmailAndPassword(user.email, user.password).then (cred => {
      return this.afs.collection(this.usuario).doc(cred.user.uid).set({
        nome: user.nome
      })
    })
    
  }

  logout() {

  }

  getAuth(){
    return this.afa;
  }
}
