import { Component, OnInit } from '@angular/core';
import { SenderCaesar } from 'src/app/_entities/Sender';
import { ToolsService } from 'src/app/_services/tools.service';

@Component({
  selector: 'app-caesar',
  templateUrl: './caesar.component.html',
  styleUrls: ['./caesar.component.css']
})
export class CaesarComponent implements OnInit {

  sender: SenderCaesar = {
    text: "",
    key: 0,
    flag: 0
  }
  constructor(
    private toolsService:ToolsService
  ) { }

  ngOnInit() {
  }
  decrypt() {
    this.toolsService.caesar(this.sender).subscribe(
      result => {
        let msg = "Kết quả giải mã là " + result;
        console.log(result);
        window.alert(msg);
      },
      err => console.log(err)
    )
  }
  ecrypt() {
    this.toolsService.caesar(this.sender).subscribe(
      result => {
        let msg = "Kết quả mã hóa là " + result;
        window.alert(msg);
      },
      err => console.log(err)
    )
  }

}
