import {Page, NavController} from 'ionic-angular';
import {BambooWritePage} from '../bamboo-write/bamboo-write'

//import {FirebaseRef} from 'angularfire2';
/*
  Generated class for the BambooPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/bamboo/bamboo.html'
})
export class BambooPage {


  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;

    //this.firebase = new Firebase("https://sweltering-heat-9516.firebaseio.com/2016/bamboo/root");
    this.title = "Say Anything";
    this.parent = "root";



    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAFb6L3F0YMW0XJl6NdZGP7wtoWfa5naPY",
      authDomain: "myfirstapp-bcfdc.firebaseapp.com",
      databaseURL: "https://myfirstapp-bcfdc.firebaseio.com",
      storageBucket: "myfirstapp-bcfdc.appspot.com",
    };
    var token = {
      "provider": "anonymous",
      "uid": "3c4e577c-d713-4561-b903-07c012f78a80"
    };

    this.fb = firebase.initializeApp(config);
    debugger;
    this.fb.auth(token).signInAnonymously().then((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("#E# " + errorCode + ":" + errorMessage);
      this.database = this.fb.database();
      this.database.ref('test/' + 'sth1').set({
        username: 'name42222',
        email: 'email43222'
      });
    });



    //this.fb = firebase.intializeApp(config);
    // console.log(config);
    // this.fb = firebase.intializeApp(config);


    //this.myDataRef = new Firebase("https://sweltering-heat-9516.firebaseio.com/2016/bamboo/");
    // //this.bookItems = af.list('');
    // //this.myDataRef = ref;
    // //데이터를 가져온다.
    // this.firebase.once('value',
    //   (snapshot) => {
    //     console.log(snapshot.val());
    //     var items = snapshot.val();
    //     for (var key in items) {
    //       this.bamboos.push(items[key]);
    //     }
    //   }, error => console.log(error.code)
    //   , () => console.log('read complete')
    // )

  }

  eventHandler(event) {
    return;
    // console.log(event, event.keyCode, event.keyIdentifier);    
    // var element = document.getElementById("TextArea");    
    // element.style.height = element.scrollHeight + "px";
    // debugger;

  }

  add() {
    this.nav.push(BambooWritePage, { title: this.title, level: this.level });
  }
}
