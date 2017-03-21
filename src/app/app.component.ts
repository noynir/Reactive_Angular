import {Component, OnInit} from '@angular/core';
import {SocketIoService} from "./common/socket-io.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  tweets$:Observable<any>;
  tweets:Array<any>;

  constructor(private stream:SocketIoService){
      this.tweets=[];
  }

  ngOnInit(){
    // this.tweets$=this.stream.connectToStream();
    // this.tweets$.subscribe((data)=>{
    //   this.tweets.push(data);
    // })
  }



}
