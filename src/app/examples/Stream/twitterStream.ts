import {Component, OnInit, OnDestroy} from '@angular/core';
import {SocketIoService} from "../../common/socket-io.service";

import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'twitter-stream',
  template: `
      <div>
        <input type="text" >
      
        <div *ngFor="let tweet of tweets" >
              {{tweet.text}}
        </div>
      </div>
  `,

})
export class TwitterStreamComponent implements OnInit,OnDestroy{


  tweets$:Observable<any>;
  tweets:Array<any>;

  private tweetsSubscribe:Subscription;

  private tweetsData:Array<Array<any>> = new Array([]);


  constructor(private stream:SocketIoService){
    this.tweets=[];
  }

  ngOnInit(){
     let stream$=this.stream.connectToStream();

     //stream$.subscribe((data)=>console.log(data));

     // let stream$ = Observable.create((observer)=>{
     //
     //    let i=0
     //    let inter=setInterval(()=>{
     //      observer.next(i);
     //      i++;
     //    },1000);
     //
     //    return ()=>{
     //      clearInterval(inter);
     //    }
     //
     // });


      //let stream$ = Observable.interval(1000);

    // stream$
    //   .windowCount(5)
    //   .switch()
    //   .scan((acc,curr)=>[...acc,curr],[])
    //   .subscribe((arr)=>)



    let restPage$ = stream$
      .skip(5)
      .bufferCount(5)
      .do((arr)=>{
        console.log(arr);
      });

    let firstPage$: Observable<any>= stream$
      .scan((acc,curr)=> [...acc,curr],[])
      .do((arr)=>{
        console.log(arr);
      })
      .take(5);


    this.tweetsSubscribe=Observable
      .merge(firstPage$,restPage$)
      .subscribe((arr)=>{
          this.tweetsData.push(arr[0]);
      });
  }

  ngOnDestroy(){
        this.tweetsSubscribe.unsubscribe();
  }



}
