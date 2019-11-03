# APM

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# NOTES

## Notifying the Component of User Changes

Two way binding, the long way
Getter and setter
valueChanges observable

### ViewChild

Angular Directive
@ViewChild(NgModel) filterInput: NgModel:
    <input type='text' [(NgModel)='listFilter']>

Custom Directive / Child Component
@ViewChild(StarComponent) star: StartComponent
    <pm-start [rating]='product.starRating'></pm-star>

Template Reference Variable
@ViewChild('divElementVar') divElementRef: ElementRef;
    <div #divElementVar>{{pageTitle}}</div>


## Communicating using service
service need to be provided in module instead of in component,
because component will get destroyed when navigating away to another component.

## BehaviorSubject is Subject with two extra features
it requires an initial value
it provides the current value on a new subscription