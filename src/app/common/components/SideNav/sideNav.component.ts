import {Component, Input} from "@angular/core";
import {Router, Route, Routes} from "@angular/router";

@Component({
  selector:'side-nav',
  template:`
      <nav>
        <div>
              <ul>
                <li *ngFor="let route of routes">
                      <a [routerLink]="route.path" routerLinkActive="active" >{{getRouteTitle(route)}}</a>
                </li>
              </ul>
        </div>
      </nav>
  `,
  styleUrls:['./sideNav.component.css']

})
export class SideNavComponent{

  private routes:Routes;

  constructor (router:Router){
    this.routes = router.config;
  }

  getRouteTitle(route:Route){
    let routeData = route.data as Array<any>;
    let titleData=routeData.find((item)=> item.title);
    return titleData.title || route.path;
  }
}
