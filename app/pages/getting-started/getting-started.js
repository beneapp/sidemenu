import {Page} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage {
  constructor() {
    this.items=[];
    this.key;
    this.val;
    this.myDataRef = new Firebase("https://sweltering-heat-9516.firebaseio.com/sidemenu/");
    this.displayMsg('msg changed');
    this.bamboo
    //this.msg = '';

    // this.myDataRef.on('child_added',
    //   (snapshot) => {
    //     debugger;
    //     var msg = snapshot.val();
    //     //this.displayMsg(msg.name);
    //     this.msg = msg.name;
    //   }
    // )
    
    //데이터를 가져온다.
    this.myDataRef.once('value',
      (snapshot) => {
        console.log(snapshot.val());
        debugger;
        var items = snapshot.val();
        for (var key in items){
          this.items.push(items[key]);
        }        
      }, error => console.log(error.code)
      , () => console.log('read complete')
    )
  }


  displayMsg(msg) {
    this.msg = msg;
  }

  sendFirebase() {
    let name = this.key;
    let text = this.val;
    //this.myDataRef.push({ name: name, text: text });
    let item = { name: name, text: text };
    this.items.push(item);
    this.myDataRef.set({data:this.items});


  }
}
