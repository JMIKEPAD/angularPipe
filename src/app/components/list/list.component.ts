import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/users';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() public userList?:User[];
  @Input() public listBackgroundColor:string = 'tomato'
  constructor() { }

  ngOnInit(): void {
    console.log("ciao")
  }


}
