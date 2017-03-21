import {Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {Observable} from "rxjs";


@Component({
    moduleId: module.id,
    selector: 'buffered-logger',
    template: `
      <div>
          <button #btn >Click Here</button> 
                
          <button #btn2 >Click Here too</button> 
          <div>
            You clicked the button {{multiClickCounter}} times
          </div>            
      </div>
    `
})
export class BufferedLoggerComponent implements OnInit,AfterViewInit {

    @ViewChild('btn')
    private buttonElem: ElementRef;

    @ViewChild('btn2')
    private buttonElem2: ElementRef;

    constructor() { }

    ngOnInit() {



    }

  ngAfterViewInit(){

    let clickStream$=Observable
      .fromEvent(this.buttonElem.nativeElement,'click')
      .map(_=>'click btn1');


    let ClickStream2$=Observable
      .fromEvent(this.buttonElem2.nativeElement,'click')
      .map(_=>'click btn2');

    let interval = Observable.interval(1000).do((number)=>console.log(number)).map(()=>'interval fired');

    Observable.merge(clickStream$,ClickStream2$,interval)
      .bufferTime((10*1000),(10*1000),10)
      .subscribe((data)=>{
        console.log(data);
      })

  }


}
