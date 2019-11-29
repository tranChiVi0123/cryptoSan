import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/_entities/Post';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-board-challenges',
  templateUrl: './board-challenges.component.html',
  styleUrls: ['./board-challenges.component.css']
})
export class BoardChallengesComponent implements OnInit {
  post: Post = {
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
  collection = { count: 0, data: []};
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
    console.log(this.posts);
  }
  submitNewJoke() {
    this.post.submittedby = JSON.parse(localStorage.getItem('userCRS'))._id;
    this.postService.newPost(this.post).subscribe(
      result => window.alert(result),
      err => console.log(err)
    );
  }
  pageChanged(event){
    this.config.currentPage = event;
  }

}
