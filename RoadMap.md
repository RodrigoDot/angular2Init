# Starting with Angular2

## This application is the result of a course at School of Net

## Initiating the project

- Copy this ``https://gist.github.com/argentinaluiz/e817c1cc2e4330b3b85b9497b78d2d35``
- Run ``npm install``


## Hello World

- Create a new directory at the ``/`` with the name of your projetc
- Inside this new directory create a file named as ``app.component.ts``


## Components

Components are basic structures in Angular, all html showed in the view is compposed by components.
They are built by parts:
- The Angular Decorator;
- The Component code itself;
- The class that will associate the component

### The Decorator

Decorators are Angular's classes that provide the methods and basic structures that we can use to extend our won components.

### The component

Components are every piece of code that will organize our application to provide legibility and make our code easy to undertand.
The components have some attributes as template, selector and etc. Every attribute defines part of the component.

### The class

Every component needs a class to become useful


## Creating a component

- Inside the ``/app/app.component.ts`` file
- We will import the decorator ``Component`` from angular core
```ts
import { Component } grom '@angular/core';
```

- ``import`` is a method to import (of course) some piece of code. we have to define what we want to import and ``from`` where it will be imported. In this case we are importing the Decorator ``Component`` from ``@angular/core``.

- after import the decorator we will define and configurate it
```ts
@Component({
  selector: 'my-app',
  template: '
    <h1>Hello World</h1>
  '
  })
```

- At first we define the component as ``@Component`` it will receive an objetc as parameter and these parameters must follow some angular rules. In this case we just created a ``selctor`` that will be used in the view to interact with our component and a ``template`` that will be as the name our component template in the view.

- Now we have to associate this component to a class to turn it useful to us
```ts
class AppComponent {

}
```

- The class that will associate the component must have the same name as the component ``app.component.ts`` > ``AppComponent``
























x
