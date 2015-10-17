/// <reference path="../../node_modules/angular2/typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
	selector: "school"
})
@View({
	templateUrl: "components/school/school.html"
})
export class School{
	constructor(){
		// alert("school");
	}
	flipDrawer= function(){
		alert("dsd");
	}
}