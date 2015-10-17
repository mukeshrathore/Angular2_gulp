/// <reference path="../../typings/tsd.d.ts" />

import {Component, View,CORE_DIRECTIVES,Attribute} from 'angular2/angular2';
import {Http, HTTP_BINDINGS} from 'angular2/http';
import {CardNew} from 'cardNew';

@Component({
  selector: 'Bcard',
  properties: ['name','uid','type'],
  viewBindings: [HTTP_BINDINGS]
})
@View({
  templateUrl : 'components/Bday_Card/bday_card.html',
  directives: [CORE_DIRECTIVES,CardNew],
  styleUrls: ['components/Bday_Card/bday_card.css']
})

export class BCard {
  name:string;
  type;
  constructor(@Attribute('name') name, private _http: Http)
  {
    alert(this.type+"  bhjkhjk");
    alert("hello Bday"+name+"h")
  	 this._http.get("components/Bday_Card/bday_card.json").toRx().map((r) => r.json()).subscribe((r) => 
                    {
                      var result = r;
                      console.log(result);
                   ///   this.done= result;
                    });
                    
                    
  }
}