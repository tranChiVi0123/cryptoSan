import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/_services/post.service';
import { UsersService } from 'src/app/_services/users.service';
import { element } from 'protractor';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  arr: string[] = [];
  config: any;
  collection = { count: 0, data: [] };
  constructor(
    private postService: PostService,
    private userService: UsersService
  ) {
  }

  ngOnInit() {
    this.postService.getRank().subscribe(
      result => {
        console.log(result);
        result.forEach(element => {
          this.arr.push(element);
        });
      },
      err => console.log(err)
    );
    this.userService.getAllUser().subscribe(
      result => {
        this.arr.forEach((element) => {
          result.forEach((item) => {
            if (element.key == item._id) {
              element.key = item.username;
            }
          });
        });
      },
      err => console.log(err)
    );
    this.collection.count = this.arr.length;
    this.collection.data = this.arr;
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.collection.count
    };

  }
  pageChanged(event) {
    this.config.currentPage = event;
  }

}
