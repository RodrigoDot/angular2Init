"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Minha pagina";
        this.data = {
            'id': 1,
            'nome': 'Rodrigo',
            'role': 'admin'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{ title }}</h1>\n    <input [(ngModel)]=\"title\">\n    <input [ngModel]=\"title\" type=\"text\"/>\n    <div className=\"divider\"></div>\n    <div class=\"input-field col s12\">\n    <select>\n      <option value=\"\" disabled selected>Choose your option</option>\n      <option value=\"1\">Option 1</option>\n      <option value=\"2\">Option 2</option>\n      <option value=\"3\">Option 3</option>\n    </select>\n    <label>Materialize Select</label>\n  </div>\n    "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map