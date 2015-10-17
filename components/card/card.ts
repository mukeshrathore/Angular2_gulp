/// <reference path="../../typings/tsd.d.ts" />

import {Component, View,CORE_DIRECTIVES} from 'angular2/angular2';

import {Chart} from 'components/chart/chart';
import {CardNew} from 'cardNew';
import {BCard} from 'components/Bday_Card/bday_card';

@Component({
  selector: 'card',
  properties: ['category']
})
@View({
  templateUrl : 'components/card/card.html',
  styleUrls : ['components/card/card.css'],
  directives: [Chart,CardNew,BCard,CORE_DIRECTIVES]
})

export class Card {
  display = false;
  // category: string;
  constructor(){
  // alert(this.category);
  }
  fun(){
    
  }
  
  displayFun(){
    if(this.display == true){
      this.display = false;
    }
    else
    this.display = true;
  }
}