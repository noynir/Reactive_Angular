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



  }


}
