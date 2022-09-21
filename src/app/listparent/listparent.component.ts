import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listparent',
  templateUrl: './listparent.component.html',
  styleUrls: ['./listparent.component.scss']
})
export class ListparentComponent implements OnInit {
  task=""
  tasklist:Array<string> =[]

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.tasklist.push(this.task)
    this.task="";
  }

}
