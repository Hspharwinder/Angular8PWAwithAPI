import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngDynamicPWASwUpdate';
  update: boolean=false;
  jokes: any;

  constructor(update:SwUpdate, private service:DataService){
    update.available.subscribe(event=>{
      // it will be update on refresh
      //this.update = true;

      // for automatic update 
      update.activateUpdate().then(()=> document.location.reload());
    })
  }

  ngOnInit(){
    this.service.getJokes()
    .subscribe(data => {
      this.jokes = data;
      console.log("jokes -- " + data);
    });

    console.log("ngOnInit");
  }

}
