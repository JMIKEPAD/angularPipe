import { Component } from '@angular/core';
import { User } from './model/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-pipe';

  
  public users: User[] = [
    { name: 'Fjoralba', ranking: 1 },
    { name: 'Simone', ranking: 5 },
    { name: 'Matteo', ranking: 4 },
    { name: 'Marco', ranking: 3 },
    { name: 'Lorenzo', ranking: 2 },
    { name: 'Alessandro', ranking: 7 },
    { name: 'Andrea', ranking: 6 },
  ];

  public listData:any = {};

  constructor(){
    this.listData.backGround = 'green'
    this.listData.userArray = this.users;
  }


  onUserChanged() {
    this.users[0].name = 'Marta';
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
