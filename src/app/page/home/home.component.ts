import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Playground';

  images = [
    {path: '../assets/images/slide-hello.jpg'},
    {path: '../assets/images/slide-circle.jpg'},
    {path: '../assets/images/slide-play.jpg'}
  ]

  dataCards = [
    { url: '../assets/images/card-play-harder.png', text:  'Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.'},
    { url: '../assets/images/card-simplicity.png', text: 'Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna.'},
    { url: '../assets/images/card-innovation.png', text: 'Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus.'}
  ];

}
