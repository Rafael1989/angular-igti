import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from '../classes/UserInfo';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  /**
   * @Input indica que userInfo "chega"
   * de outro componente, ou seja, é
   * um valor de "entrada" (input)
   */
  @Input() user: UserInfo;

  constructor() {}

  ngOnInit() {}

  getUrl() {
    return `https://github.com/${this.user.login}`;
  }
}
