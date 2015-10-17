/// <reference path="node_modules/angular2/typings/tsd.d.ts" />

import {Component, View, Directive , bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';

import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from 'components/home/home';
import {School} from 'components/school/school';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'app.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'School', component: School },
  { path: '/Home', as: 'Home', component: Home }
])
export class App {
  public name :string;
  constructor(){ }  
  myFun= function () {
    alert("fsfs");
    document.getElementById("ctext").innerHTML="fdssdf";
  }
  
    clickToggle= function(){
    // alert("fsdf");
        $("#wrapper").toggleClass("toggled");
  }
  
  toggleSub= function(){
     
    
  }	
}

bootstrap(App, [ROUTER_PROVIDERS]);