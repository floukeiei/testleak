import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/service/mock.service';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.scss']
})
export class Item1Component implements OnInit {
  val = ['a'];
  constructor(public mock:MockService) { }

  ngOnInit(): void {
    setTimeout(() => {
    console.log(this.mock.test);
    }, 100);
    this.mock.save = this.val;
  }

}
