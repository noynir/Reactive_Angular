import {Component, ViewChild, ElementRef, AfterViewInit, HostListener} from "@angular/core";
import {Observable} from "rxjs/Observable";


@Component({
  selector:'click-stream',
  template:`
    <div>
      
        <button #btn >Click Me</button> 
        <div>
          You clicked the button {{counter}} times
        </div>            
            
    </div>
  `
})
export class ClickStreamComponent implements AfterViewInit{

  @ViewChild('btn')
  private buttonElem: ElementRef;

  @ViewChild('btn2')
  private buttonElem2: ElementRef;

  private counter=0;


  ngAfterViewInit(){

    // let clickStream$=Observable
    //     .fromEvent(this.buttonElem.nativeElement,'click');
    //
    // let clickSumStream$ =clickStream$.map((e)=> 1)
    //   .scan((acc,value)=>acc+value)
    //   .subscribe((time)=>{
    //      this.counter=time;
    //   });




  }

}
