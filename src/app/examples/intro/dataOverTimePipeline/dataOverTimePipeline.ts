import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
@Component({
  selector:'data-over-time',
  template:`
    <div>
      <div>
          Data Stream: {{intervalState}}
          <ul>
            <li *ngFor="let item of numbers" >{{item}}</li>
          </ul> 
          
      </div>
    
    </div>
  `
})
export class DataOverTimePipelineComponent implements OnInit {

  private interval:Observable<number>;

  private numbers:number[]=[];

  private intervalState='streaming'

  ngOnInit(){

    let inter=Observable.interval(1000).take(6);

    inter.subscribe((item)=>console.log(item));
    this.interval = inter.take(6);



    this.interval.subscribe(
      (item)=>this.numbers.push(item),
      (err) => {
        this.intervalState='error';
      },
      ()=> this.intervalState='Done'
    );
  }

}
