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
    this.title = "Say Anything";
    this.level = "root";
        
    this.myDataRef = new Firebase("https://sweltering-heat-9516.firebaseio.com/2016/bamboo/");
    //this.bookItems = af.list('');
    //this.myDataRef = ref;

    //데이터를 가져온다.
    this.myDataRef.once('value',
      (snapshot) => {
        console.log(snapshot.val());
        var items = snapshot.val();
        for (var key in items) {
          this.bamboos.push(items[key]);
        }
      }, error => console.log(error.code)
      , () => console.log('read complete')
    )
        
  }

  eventHandler(event) {
    return;
    // console.log(event, event.keyCode, event.keyIdentifier);    
    // var element = document.getElementById("TextArea");    
    // element.style.height = element.scrollHeight + "px";
    // debugger;
   
  }
  
  Reply(){
    this.nav.push(BambooWritePage, {title:this.title, level:this.level});
  }
}
