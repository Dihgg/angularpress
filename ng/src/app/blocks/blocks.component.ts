import { Component, OnInit, Input } from '@angular/core';
import { Block } from 'src/app/services/wordpress.interface';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  @Input() block: Block;

  constructor() { }

  ngOnInit(): void {
    console.log(this.block);
  }

}
