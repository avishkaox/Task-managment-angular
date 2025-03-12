import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummyusers';

const randomIndexNumber = () => {
  return Math.floor(Math.random() * DUMMY_USERS.length);
};

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndexNumber()];

  get imageUrl() {
    return 'users/' + this.selectedUser.avatar;
  }

  onSelectedUser() {
    const randomIndexNumber = () => {
      return Math.floor(Math.random() * DUMMY_USERS.length);
    };
    this.selectedUser = DUMMY_USERS[randomIndexNumber()];
  }
}
