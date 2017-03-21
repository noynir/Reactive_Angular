import {Component, ViewChild, ElementRef, AfterViewInit, HostListener} from "@angular/core";
import {Observable} from "rxjs/Observable";


@Component({
  selector:'click-stream',
  template:`
    <div>
      
        <button #btn >Click Me</button> 
        <div>
          You double clicked the button {{counter}} times
        </div>            
        <button #btn2 >Click Me </button> 
        <div>
          You clicked the button {{multiClickCounter}} times
        </div>            
    </div>
  `
})
export class ClickTimingComponent implements AfterViewInit{

  @ViewChild('btn')
  private buttonElem: ElementRef;

  @ViewChild('btn2')
  private buttonElem2: ElementRef;

  private counter=0;
  private multiClickCounter=0;


  ngAfterViewInit(){

      //Timing with debuounce buffer and scan...



  }

}
