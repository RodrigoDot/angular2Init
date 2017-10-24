import { Component } from '@angular/core';

@Component ({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <input [(ngModel)]="title">
    <input [ngModel]="title" type="text"/>
    <div className="divider"></div>
    <div class="input-field col s12">
    <select>
      <option value="" disabled selected>Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Materialize Select</label>
  </div>
    `
})

export class AppComponent {

  title = "Minha pagina";

  data = {
    'id' : 1,
    'nome' : 'Rodrigo',
    'role' : 'admin'
  }

}
