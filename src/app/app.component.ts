import { Input, Component, OnInit } from '@angular/core';
import { User } from './_entities/User';
import { UsersService } from './_services/users.service';
import { observable } from 'rxjs';

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
    let checkLogin = localStorage.getItem("userCRS");
    if (checkLogin == null) {
      return true;
    } else {
      return false;
    }
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
        if (observer == undefined) {
          window.alert("Đăng nhập thất bại vui lòng kiểm tra lại!");
          return;
        } else {
          window.alert("Đăng nhập thành công!");
          // console.log("token: " + observer.token);
          // console.log("id: " + observer.user._id);
          let userTemp = {
            _id: observer.user._id,
            email: observer.user.email,
            token: observer.token
          }
          localStorage.setItem("userCRS", JSON.stringify(userTemp));
        }
      })
    }
  }
  logout() {
    let userLogout = JSON.parse(localStorage.getItem("userCRS"));
    // console.log(userLogout);
    // console.log(typeof(userLogout.token))
    this.userServices.logout(userLogout.token).subscribe(observable =>
      localStorage.removeItem("userCRS"),
      err=>{
        window.alert(err);
      }
    );
    
  }

}
