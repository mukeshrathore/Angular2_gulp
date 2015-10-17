/// <reference path="../../typings/tsd.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var BCard = (function () {
    function BCard(name, _http) {
        this._http = _http;
        alert("hello Bday" + name + "h");
        this._http.get("components/Bday_Card/bday_card.json").toRx().map(function (r) { return r.json(); }).subscribe(function (r) {
            var result = r;
            console.log(result);
        });
    }
    BCard = __decorate([
        angular2_1.Component({
            selector: 'Bcard',
            properties: ['name', 'uid'],
            viewBindings: [http_1.HTTP_BINDINGS]
        }),
        angular2_1.View({
            templateUrl: 'components/Bday_Card/bday_card.html',
            directives: [angular2_1.CORE_DIRECTIVES],
            styleUrls: ['components/Bday_Card/bday_card.css']
        }),
        __param(0, angular2_1.Attribute('name')), 
        __metadata('design:paramtypes', [, http_1.Http])
    ], BCard);
    return BCard;
})();
exports.BCard = BCard;
//# sourceMappingURL=bday_card.js.map