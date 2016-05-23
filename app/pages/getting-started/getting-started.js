import {Page} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage {
  constructor() {
    this.items=[];
    this.key;
    this.val;    

    //this.msg = '';

    // this.myDataRef.on('child_added',
    //   (snapshot) => {
    //     debugger;
    //     var msg = snapshot.val();
    //     //this.displayMsg(msg.name);
    //     this.msg = msg.name;
    //   }
    // )
    

  }


  displayMsg(msg) {
    this.msg = msg;
  }


}
