/********************************************************************************* 
*  WEB422 – Assignment 6
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: Alon Raigorodetsky Student ID: 109763201 Date: 10-04-2022 

* Angular App (Deployed) Link: https://laughing-williams-e4f99d.netlify.app
* User API (Heroku) Link: https://shrouded-castle-62382.herokuapp.com/api/user

********************************************************************************/ 

import { Component, OnInit } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web422-a6';
  searchString!: string;
  public token:any;

  constructor(private router: Router, private auth: AuthService){}
  
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart){
        this.token = this.auth.readToken();
      }
    }); 
  }

  handleSearch():void{
    this.router.navigate(['/search'], {queryParams:{q:this.searchString}});
    this.searchString = "";
  }

  logout(): void{
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}
