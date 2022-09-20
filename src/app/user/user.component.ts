import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input('userDetail') user:any;
  @Input() userIndex:any;
  @Output() removeUserEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  removeUser(){
    console.log(this.userIndex)
    this.removeUserEvent.emit(this.userIndex)
  }



}
