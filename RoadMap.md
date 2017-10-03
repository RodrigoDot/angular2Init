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
```js
import { Component } grom '@angular/core';
```

- ``import`` is a method to import (of course) some piece of code. we have to define what we want to import and ``from`` where it will be imported. In this case we are importing the Decorator ``Component`` from ``@angular/core``.

- after import the decorator we will define and configurate it
```js
@Component({
  selector: 'my-app',
  template: '
    <h1>Hello World</h1>
  '
  })
```

- At first we define the component as ``@Component`` it will receive an objetc as parameter and these parameters must follow some angular rules. In this case we just created a ``selector`` that will be used in the view to interact with our component and a ``template`` that will be as the name our component template in the view.

- Now we have to associate this component to a class to turn it useful to us
```js
export class AppComponent {

}
```

- The class that will associate the component must have the same name as the component ``app.component.ts`` > ``AppComponent``. And to be used to another element in the application we use the method ``export``.


## Creating a Module

The Angular 2 works using modules that execute the functions of the application.
Module also are Angular Decorators and must be imported, declared, configurated and exported just like the compopnents.
The difference between them is that the components will be loaded by modules.

- Go to ``/app`` and create a file named as ``app.module.ts``, this will be the base module of the application. And the name follow the rule that every piece of the system that have association must have the same name, in this case "APP".
-  Now let's write the code
```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
```

As we saw before, the ``import`` is a method the IMPORT something, the ``{ NgModule }`` is the decorator imported and the rest is from where it comes.

- Now let's declare and cofigure the module
```js
@NgModule ({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
  })
```

Inside the module declaration we set some attributes just like we do inside the compopnents. Here we set the ``imports``, ``declarations`` and the ``bootstrap``.

- The ``imports[]`` will be responsables to load the others modules, if we have to import someone;
- The ``declarations[]`` will load all components that we will use in this module;
- And the ``bootstrap[]`` is the primary component, it is the component that is responsable to initiate the module.

After doing this, we have to associate it to a class, just like we did in the component
```js
export class AppModule {

}
```


## Starting the application

To start the application we will create a file that will be responsable for this task

- Go to ``/app`` and create a file ``main.ts``
- Inside this file write the code:
```js
import { platformBrowserDynamic } from '@angular/PlatformBrowserDynamic';
import { AppModule } from './app.module';

const platform = PlatformBrowserDynamic();
platform.bootstrapModule(AppModule);
```

After it just run ``npm start``


## Sending data to the view (interpolation)

When we want to show some data on the view, we use the interpolation of the angular. It is simple.

- Declare the container of the data inside the class body
```js
export class AppComponent {

  title = "Minha pagina";

}
```
Here we declared a class ``AppComponent``. And inside it we declared a data container ``title`` and associated something to it.

- Now we have to access this data container inside the view
```js
@Component ({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    `
})
```
Doing this whatever there is inside the data container will be transported to the view. We can also do some logic expression inside the ``{{ }}`` if we want. Like this ``{{ 2 + 2 }}`` and it will show ``4`` in the view.
















x
