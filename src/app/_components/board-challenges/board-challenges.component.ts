import { Component, OnInit } from '@angular/core';
import { Post, PostNew } from 'src/app/_entities/Post';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-board-challenges',
  templateUrl: './board-challenges.component.html',
  styleUrls: ['./board-challenges.component.css']
})
export class BoardChallengesComponent implements OnInit {
  post: Post = {
    _id: '',
    plaintext: '',
    key: '',
    ciphertext: '',
    level: 1,
    description: '',
    caesar: '',
    submittedby: '',
  }
  postNew: PostNew = {
    plaintext: '',
    key: '',
    ciphertext: '',
    level: 1,
    description: '',
    caesar: '',
    submittedby: '',
  }
  isLogin: boolean = JSON.parse(localStorage.getItem('userCRS')) ? true : false;
  posts: Post[] = [];
  answer: string = "";
  config: any;
  collection = { count: 0, data: [] };
  constructor(
    private postService: PostService
  ) {
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      result => {
        result.forEach(element => {
          this.posts.push(element);
        });
      },
      error => console.log(error)
    )
    this.collection.count = this.posts.length;
    this.collection.data = this.posts;
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }
  submitNewJoke() {
    this.postNew.submittedby = JSON.parse(localStorage.getItem('userCRS')) ? JSON.parse(localStorage.getItem('userCRS'))._id : "";
    this.postService.newPost(this.postNew).subscribe(
      result => {
        window.alert("Thêm mới thành công");
        window.location.reload();
      },
      err => console.log(err)
    );
  }
  submitAnswer() {
    if (this.post.plaintext.toLocaleUpperCase() === this.answer.toLocaleUpperCase().trim()) {
      let sender = {
        idpost: this.post._id
      }
      this.postService.solvePost(sender).subscribe(
        result => {
          window.alert("Chúc mừng bạn");
          window.location.reload();
        },
        err => console.log(err)
      )
    } else {
      window.alert("Chưa chính xác");
    }
  }
  tableRowClick(idpost) {
    this.post = this.posts[idpost];
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
  sovled(items) {
    let idusercurrent = JSON.parse(localStorage.getItem('userCRS')) ? JSON.parse(localStorage.getItem('userCRS'))._id : "";
    if (idusercurrent == "") {
      return false;
    }
    if (items.indexOf(idusercurrent) > -1) {
      return true;
    } else {
      return false;
    }
  }

}
