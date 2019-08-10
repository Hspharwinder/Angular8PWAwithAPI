##PWA for offline application

# NgDynamicPWASwUpdate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


----------------------------------------------------------------------------------------------------------------------
## CODE CHANGES
---------------------------
## work fine for static webaplication
## Add 
1. ng add @angular/pwa 

2. ng build --prod

3. in dist->folder> http-server -o

-------------------------------------------

## Additional changes for dynamic/webapi application
 
## changes in component file

import { SwUpdate } from '@angular/service-worker';

constructor(update:SwUpdate, private service:DataService){
    update.available.subscribe(event=>{
      // for automatic update 
      update.activateUpdate().then(()=> document.location.reload());
    })
  }`


## add code in ngsw-cnfig.json flie

"assetsGroups":[],

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


