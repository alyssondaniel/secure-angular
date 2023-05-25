import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: any = {}

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.get().subscribe((data: any) => {
      console.log('data:', data);
      // console.log('registration:', data.registration);

      // sane default for user data
      // data.registration.data = data.registration.data || {};
      this.user = data;
    });
  }
}
