import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TwitterStreamComponent} from "./examples/Stream/twitterStream";



const routes:Routes = [
  {path:'', redirectTo:'overtime', data:[{title:'Home'}], pathMatch:'full'  },
  {path:'twitter' ,component:TwitterStreamComponent, data:[{title:'Twitter'}]}
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRouting{}
