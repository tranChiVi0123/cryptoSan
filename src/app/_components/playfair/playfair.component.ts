import { Component, OnInit } from '@angular/core';
import { SenderPlayfair } from 'src/app/_entities/Sender';
import { ToolsService } from 'src/app/_services/tools.service';

@Component({
  selector: 'app-playfair',
  templateUrl: './playfair.component.html',
  styleUrls: ['./playfair.component.css']
})
export class PlayfairComponent implements OnInit {

  sender: SenderPlayfair = {
    text: "",
    key: "",
    flag: 0
  }
  constructor(
    private toolsService: ToolsService
  ) { }

  ngOnInit() {
  }
  decrypt() {
    this.sender.flag = 1;
    this.toolsService.playfair(this.sender).subscribe(
      result => {
        let msg = "Kết quả giải mã là " + result;
        console.log(result);
        window.alert(msg);
      },
      err => console.log(err)
    )
  }
  ecrypt() {
    this.sender.flag = 0;
    this.toolsService.playfair(this.sender).subscribe(
      result => {
        let msg = "Kết quả mã hóa là " + result;
        window.alert(msg);
      },
      err => console.log(err)
    )
  }

}
