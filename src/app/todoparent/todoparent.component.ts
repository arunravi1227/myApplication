import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoparent',
  templateUrl: './todoparent.component.html',
  styleUrls: ['./todoparent.component.scss']
})
export class TodoparentComponent implements OnInit {



todo:any
todoParent:any=[]
isActive:boolean=true;
 constructor() {}

 ngOnInit():
  void { }
   myButton()
  { 
    console.log(this.todoParent);
 this.todoParent.push(this.todo)
 this.todo="";


 }

 clicked(event:any){
  this.isActive=!this.isActive
  console.log(this.isActive);
  
 }
 
}






 
