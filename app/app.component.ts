import { Component } from '@angular/core';

@Component ({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    {{ data }}
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
