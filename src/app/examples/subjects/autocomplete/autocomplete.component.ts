import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Http} from "@angular/http";

@Component({
  selector: 'app-autocomplete',
  template: `
    <div class="main">
      <section>
        <h3>Single Source</h3>
        <div>
            <input placeholder="Search your favorite Star wars Character" #searchRef (keyup)="onKeyup(searchRef.value,false)" />
        </div>
        <div>
            <ul>
              <li *ngFor="let result of searchResults">{{result?.name}}</li>
            </ul>
        </div>
       </section>      
       <section>
       <h3>Multiple Source</h3>
        <div>
            <input placeholder="Search your favorite Star wars Character" #searchRefMulti (keyup)="onKeyup(searchRefMulti.value,true)" />
        </div>
        <div>
            <ul>
              <li *ngFor="let result of searchResultsMulti">{{result?.name}}{{result?.title}}</li>
            </ul>
        </div>
       </section>
    </div>
  `,
  styles: [`
    .main{
      display: flex;
      justify-content:space-between;
      width: 80%;
    }
    section{
      width: 45%;
    }
    input{
      width:90%;
    }
  `]
})
export class AutocompleteComponent implements OnInit {

  private searchResults$:Subject<any>= new Subject<any>();
  private searchResultsMulti$:Subject<any>= new Subject<any>();

  private searchResults:any[];
  private searchResultsMulti:any[];
  constructor(private http:Http) { }

  ngOnInit() {

  }

  onKeyup(value,isMulti){


  }
  fetchResults(term){
    console.log(`searching term ${term}`);
    return this.http.get(`https://swapi.co/api/people/?search=${term}`);
  }
  fetchFilmsResults(term){
    console.log(`searching films term  ${term}`);
    return this.http.get(`https://swapi.co/api/films/?search=${term}`);
  }

}
