import {Component, ViewChild, ElementRef, AfterViewInit, HostListener} from "@angular/core";
import {Observable} from "rxjs";


@Component({
  selector:'click-stream',
  template:`
    <div>
        
        Vote For Favorite Basketball Player:
        <ul>
          <li >
              Michael Jordan <button #btn >+</button> 
          </li>
          <li >
              LeBron James<button #btn2 >+</button> 
          </li>
        </ul>
        <div>
          Votes:{{totalVotes | async}}
        </div>
    </div>
  `
})
export class CombineClickStreamComponent implements AfterViewInit{

  @ViewChild('btn')
  private buttonElem: ElementRef;

  @ViewChild('btn2')
  private buttonElem2: ElementRef;

  private totalVotes:Observable<string>

  private counter1=0;
  private counter2=0;

  private players=['Michael Jordan',]
  ngAfterViewInit(){

    //combine latest with startWith



  }

}
