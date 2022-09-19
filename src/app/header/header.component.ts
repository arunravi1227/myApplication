import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title:any="Enter your name";

  isdisabled:boolean=false; 
  isActive:boolean=true;
  students = [{studentId:1,studentName:'Arun'},{studentId:2,studentName:'Vicky'},{studentId:3,studentName:'Vijay'}]


  constructor() { }

  ngOnInit(): void {
  }
  button(){
    console.log("clicked");
    this.isdisabled=true;
    
  }
  onclick(event:any){
    this.title=event.target.value
  }
  clicking(){
    this.isdisabled=false;
  }


}
