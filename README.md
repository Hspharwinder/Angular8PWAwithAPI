# NgDynamicPWASwUpdate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

----------------------------------------------------------------------------------------------------------------------
## CODE CHANGES
---------------------------
## Add 
1. ng add @angular/pwa 

2. ng build --prod

3. in dist->folder> http-server -o

##work fine for static webaplication
-------------------------------------------

## Addition for dynamic or webApi offline application
 
## changes in component file

import { SwUpdate } from '@angular/service-worker';

constructor(update:SwUpdate, private service:DataService){
    update.available.subscribe(event=>{
      // for automatic update 
      update.activateUpdate().then(()=> document.location.reload());
    })
  }


## add code in ngsw-cnfig.json flie

after "assetGroups":[],
 "dataGroups": [
    {
      "name": "jokes-api",
      "urls": ["https://api.chucknorris.io/jokes/random"],
      "cacheConfig": {
        "strategy": "freshness",
        "maxSize": 20,
        "maxAge": "1h", // you can also specify days here
        "timeout": "5s"
      }
    }
  ]
