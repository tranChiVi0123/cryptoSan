import { Input, Component, OnInit } from '@angular/core';
import { User } from './_entities/User';
import { UsersService } from './_services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cryptosan';
  users: User[];
  userCurrent: User = {
    email: '',
    username: '',
    password: '',
    token: ''
  }
  passwordConfirm: String = "";

  constructor(
    private userServices: UsersService
  ) {

  }

  ngOnInit() {
    this.userServices.getAllUser()
      .subscribe(users => this.users = users);
    this.isLogin();
  }
  isLogin() {
    return true;
  }
  signUp() {
    if (this.userCurrent.username == "" || this.userCurrent.email == "" || this.userCurrent.password == "" || this.passwordConfirm == "") {
      window.alert("Vui lòng điền đầy đủ thông tin");
      return;
    } else {
      this.users.forEach(item => {
        if (item.username == this.userCurrent.username || item.email == this.userCurrent.email) {
          window.alert("Tên đăng nhập và email đã tồn tại");
          return;
        }
      })
      if (this.passwordConfirm != this.userCurrent.password) {
        window.alert("Mật khẩu không trùng nhau.");
        return;
      }
      this.userServices.signUp(this.userCurrent)
        .subscribe(item => window.alert(item.message));
    }
  }
  signIn() {
    if (this.userCurrent.email == "" || this.userCurrent.password == "") {
      window.alert("Vui lòng nhập email và mật khẩu.");
      return;
    } else {
      this.userServices.signIn(this.userCurrent).subscribe(observer => {
        console.log("cmn:");
        if(observer==undefined){
          window.alert("Lỗi cmnr");
        }
      })
    }
  }

}
