import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';
import { User } from 'src/app/_entities/User';
import { Post } from 'src/app/_entities/Post';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userCurrent: User = {
    email: '',
    username: '',
    password: '',
    token: ''
  }
  postUpdate: Post = {
    _id: '',
    plaintext: '',
    key: '',
    ciphertext: '',
    level: 1,
    description: '',
    caesar: '',
    submittedby: '',
  }
  posts: Post[] = [];
  config: any;
  collection = { count: 0, data: [] };
  constructor(
    private userSevice: UsersService,
    private postService:PostService
  ) { }

  ngOnInit() {
    this.userSevice.getInfo().subscribe(
      result => {
        this.userCurrent = result;
      },
      err => console.log(err)
    );
    this.userSevice.getOwnerPost().subscribe(
      result => {
        console.log(result);
        result.forEach(element => {
          this.posts.push(element);
        },
          err => console.log(err));
      }
    )
    this.collection.count = this.posts.length;
    this.collection.data = this.posts;
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };

  }
  onUpdate() {
    this.userSevice.updateInfo(this.userCurrent).subscribe(
      result => {
        console.log(result);
        window.alert("Cập nhật thông tin thành công");
      },
      err => {
        console.log(err);
        window.alert("Có lỗi xảy ra vui lòng kiểm tra lại thông tin");
      }
    );
  }
  tableRowClick(idpost) {
    this.postUpdate = this.posts[idpost];
  }
  updateJoke(){
    this.postService.postUpdate(this.postUpdate).subscribe(
      result=>window.alert("Đã cập nhật bài viết của bạn"),
      err=>console.log(err)
    );
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }

}
