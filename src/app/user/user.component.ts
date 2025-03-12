import { Component , computed ,  signal } from '@angular/core';
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
  selectedUser = signal(DUMMY_USERS[randomIndexNumber()]);

  imageUrl = computed(() => {
    return 'users/' + this.selectedUser().avatar;
  });

  // get imageUrl() {
  //   return 'users/' + this.selectedUser.avatar;

  // }

  onSelectedUser() {
    const randomIndexNumber = () => {
      return Math.floor(Math.random() * DUMMY_USERS.length);
    };
    this.selectedUser.set(DUMMY_USERS[randomIndexNumber()]);
  }
}
