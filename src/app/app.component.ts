import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './model/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  implements OnInit{
  title = 'angular-pipe';

  
  public users: User[]=[];

  public listData:any = {};

  constructor(private http:HttpClient){
    this.listData.backGround = 'green'
    this.listData.userArray = this.users;
  }
  ngOnInit(): void {
    this.http.get<User[]>("./assets/users.json").subscribe(users=>{
      this.users=users
      this.listData.userArray = this.users;
    })
  }


  onUserChanged() {
    this.users[0].name = 'marta';
    this.listData.userArray=this.users;
  }
  onUserAdded(user: User) {
    this.users.push(user);
    this.listData.userArray=this.users;
  }
  onArrayChanged(usersArray: User[]) {
    this.users = usersArray;
    this.listData.userArray=this.users;
  }
}
