import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SocketIoService} from "./common/socket-io.service";
import {SideNavComponent} from "./common/components/SideNav/sideNav.component";
import {TwitterStreamComponent} from "./examples/Stream/twitterStream";
import {AppRouting} from "./app.routing";
import {IntroModule} from "./examples/intro/introModule";
import {OperatorsModule} from "./examples/Operators/operators.module";
import {HigherOrderModule} from "./examples/higher-order/higher-order.module";


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TwitterStreamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    IntroModule,
    OperatorsModule,
    HigherOrderModule
  ],
  providers: [SocketIoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
