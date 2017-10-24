import { Component } from '@angular/core';

@Component ({
  selector: 'my-app',
  templateUrl: 'app/app.component.html' 
})

export class AppComponent {

  title = "Minha pagina";

  data = {
    'id' : 1,
    'nome' : 'Rodrigo',
    'role' : 'admin'
  }

}
