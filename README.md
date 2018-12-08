tutorial from https://www.youtube.com/watch?v=5I6k77uqtLY

ng new angular7firestore
routing? n

cd angular7firestore

npm i --s firebase @angular/fire

on firebase.com ... create project ... goto </> and copy firebase object

in environments/enviroments.ts ... add "firebaseConfig: { (object from firebase) }"
  export const environment = {
    production: false,
    firebaseConfig: {
      apiKey: "AIzaSyAP5oKx62tcc_TJanJF9KuhviIwilNI0wo",
      authDomain: "try-firestore-sw.firebaseapp.com",
      databaseURL: "https://try-firestore-sw.firebaseio.com",
      projectId: "try-firestore-sw",
      storageBucket: "try-firestore-sw.appspot.com",
      messagingSenderId: "707425237107"
    }
  };


in app.module.ts ... import AngularFireModule and AngularFirestoreModule
  import { AngularFireModule } from '@angular/fire';
  import { AngularFirestoreModule } from '@angular/fire/firestore';

    imports: [
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule
    ],

ng s -o

