import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/users';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Output() public userChanged = new EventEmitter<any>(); 
  @Output() public arrayChanged = new EventEmitter<User[]>();
  @Output() public userAdded = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
    console.log('ciao');
  }
  changeUser(){
     this.userChanged.emit();
  }
  changeArray(){
    const newArray:User[]=[
      { name: 'Michael', ranking:3},
      { name: 'Francesca', ranking:1},
      { name: 'Nicolò', ranking:2},
    ]
    this.arrayChanged.emit(newArray);
  }
  addUser(){
    const user:User = {name: 'Andrea a', ranking:100}
    this.userAdded.emit(user);
  }
 }


