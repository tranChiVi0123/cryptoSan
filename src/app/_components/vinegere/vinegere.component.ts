import { Component, OnInit } from '@angular/core';
import { ToolsService } from 'src/app/_services/tools.service';
import { SenderVinegere } from 'src/app/_entities/Sender';

@Component({
  selector: 'app-vinegere',
  templateUrl: './vinegere.component.html',
  styleUrls: ['./vinegere.component.css']
})
export class VinegereComponent implements OnInit {

  sender: SenderVinegere = {
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
    this.toolsService.vinegere(this.sender).subscribe(
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
    this.toolsService.vinegere(this.sender).subscribe(
      result => {
        let msg = "Kết quả mã hóa là " + result;
        window.alert(msg);
      },
      err => console.log(err)
    )
  }

}
