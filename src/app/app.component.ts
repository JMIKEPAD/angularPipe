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

  onUserChanged() {
    this.users[0].name = 'Marta';
  }
  onUserAdded(user: User) {
    this.users.push(user);
  }
  onArrayChanged(usersArray: User[]) {
    this.users = usersArray;
  }
}
