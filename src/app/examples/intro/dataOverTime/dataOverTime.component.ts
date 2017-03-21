import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
@Component({
  selector:'data-over-time',
  template:`
    <div>
      <div>
          Data Stream:
          <ul>
            <li *ngFor="let item of numbers" >{{item}}</li>
          </ul> 
      </div>
    
    </div>
  `
})
export class DataOverTimeComponent implements OnInit {


  private numbers:number[]=[];


  ngOnInit(){

    let interval=Observable.interval(1000).take(6);


    interval.subscribe((item)=>this.numbers.push(item));
  }

}
