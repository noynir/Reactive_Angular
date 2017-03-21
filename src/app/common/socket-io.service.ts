import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from "rxjs";

@Injectable()
export class SocketIoService {

  private host: string = window.location.protocol + "//" + window.location.hostname + ":" + 4100;
  socket: SocketIOClient.Socket;
  private stream$:Observable<any>;

  constructor() {

        console.log('connect to socket...');
        this.socket= io.connect(this.host);
        this.socket.on("connect", () => this.connect());
        this.socket.on('tweet',(data)=>{});
        this.socket.disconnect();


  }

  connectToStream():Observable<any> {

    return this.stream$;


  }

  // // Handle connection opening
  private connect():void{
    console.log(`Connected to "${this.host}"`);

    this.socket.emit("tweets-get");
  }
  //
  // // Handle connection closing
  // private disconnect() {
  //   console.log(`Disconnected from "${this.name}"`);
  // }
}
