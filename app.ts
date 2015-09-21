/// <reference path="typings/tsd.d.ts" />

import {Component, View, Directive ,bootstrap,CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'app.html'
})
export class App {
  public name :string;
  constructor(){ }
}

bootstrap(App);


// @Directive({
//   selector: '[car]',
//   properties : ['text : car | capitalize'],
//   host : {
//     "(mouseover)":"show()"
//   }
// })
// class Car {
//   text:string;
//   show(){
//     console.log(this.text);
//   }
// }
