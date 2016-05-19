import {Page, NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the BambooWritePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/bamboo-write/bamboo-write.html',
})
export class BambooWritePage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.parent = {};
    this.parent.title = this.navParams.get('title');
    this.parent.level = this.navParams.get('level');
  }
}
