import {Page, Alert, NavController} from 'ionic-angular';
import {Http} from 'angular2/http';
/*
  Generated class for the ShopOverseasPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/shop-overseas/shop-overseas.html',
})
export class ShopOverseasPage {
  static get parameters() {
    return [[NavController], [Http]];
  }

  constructor(nav, http) {
    this.nav = nav;
    this.http = http;
    this.items = [];
    
    this.text = 'aaaa';
    var url = "http://www.ppomppu.co.kr/zboard/zboard.php?id=ppomppu4";
    this.http.get(url).subscribe(data => {
      debugger;
      //console.log("DATA:" + data._body);
      var parser = new DOMParser();
      var doc = parser.parseFromString(data.text(), "text/html");
      var elements = doc.querySelectorAll('tr[class^=list]');
      
      debugger;
      for (var i in elements){
        var item;
        var date = elements[i].querySelector('td[title]').title; // date "16.05.23 16:16:35"
        var pattern = /(\d{2})\.(\d{2})\.(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
        item.date = new Date(st.replace(pattern,'20$1-$2-$3T$4:$5:$6'));
        item.writer = elements[i].querySelector('.list_name').textContent.trim(); // 글쓴이
        item.title = elements[i].querySelector('.list_title').textContent.trim();  // 명
        item.imgSrc = elements[i].querySelector('img').src; // 이미지
        item.reply = elements[i].querySelector('.list_comment2 span').textContent; // 댓글 수
        item.good = elements[i].querySelectorAll('td[nowrap]')[2];  // 추천
        item.read = elements[i].querySelectorAll('td[nowrap]')[3]; //조회
        item.url = "http://www.ppomppu.co.kr/" + elements[i].querySelectorAll('a[href]')[2].getAttribute('href'); // url
        items.push(item);        
      }
      //this.title = doc.querySelector('.title strong').innerHTML.trim();
      //this.subtitle = doc.querySelector('.title .back strong').innerHTML.trim();
    });

  }

  makeGetRequest() {
    this.http.get("https://httpbin.org/ip")
      .subscribe(data => {
        debugger;
        var alert = Alert.create({
          title: "Your IP Address",
          subTitle: data.json().origin,
          buttons: ["close"]
        });
        this.nav.present(alert);
      }, error => {
        console.log(JSON.stringify(error.json()));
      });

    var url = "http://www.ppomppu.co.kr/zboard/zboard.php?id=ppomppu4";
    this.http.get(url).subscribe(data => {
      debugger;
      console.log("DATA" + data);
    });
  }

  makePostRequest() {
    this.http.post("https://httpbin.org/post", "firstname=Nic")
      .subscribe(data => {
        debugger;
        var alert = Alert.create({
          title: "Data String",
          subTitle: data.json().data,
          buttons: ["close"]
        });
        this.nav.present(alert);
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }
}
