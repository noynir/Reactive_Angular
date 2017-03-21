import {Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-simple-switch',
  template: `
    <div>
      <div>
          <div>{{counter$ | async}}</div>
          <div>
              <button #btnStart >Start</button>
              <button #btnStop >Stop</button>
          </div>
      </div>
    </div>
  `
})
export class SimpleSwitchComponent implements OnInit,AfterViewInit {

  @ViewChild('btnStart')
  private btnStart:ElementRef;

  @ViewChild('btnStop')
  private btnStop:ElementRef;


  private counter$:Observable<number>;

  private stopper$:Observable<number>;
  constructor() {
      this.stopper$=Observable.interval(1000);
  }

  ngOnInit() {
  }
  ngAfterViewInit(){

   //switchMap







  }

}
