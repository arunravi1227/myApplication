import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listchild',
  templateUrl: './listchild.component.html',
  styleUrls: ['./listchild.component.scss']
})
export class ListchildComponent implements OnInit {
  isActive:boolean=true;
  @Input() passvalue:string="";

  constructor() { }

  ngOnInit(): void {
  }
  check(event:any){
    this.isActive=!this.isActive
    console.log((this.isActive));
    
  }

}
