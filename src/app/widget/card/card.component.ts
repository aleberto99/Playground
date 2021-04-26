import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() dataCard: Array<{ url: number, text: string }>;

  constructor() { }

  ngOnInit() {
  }

}
