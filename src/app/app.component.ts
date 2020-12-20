import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl : 'assets/images/tree.jpg',
      username : 'Nature',
      content : 'i saw this tree today',
    },
    {
      title: 'Mountain',
      imageUrl : 'assets/images/mountain.jpg',
      username : 'mountain',
      content : 'This is mountain',
    },
    {
      title: 'Biking',
      imageUrl : 'assets/images/biking.jpg',
      username : 'Bike',
      content : 'This is Bike',
    },
    {
      title: 'Biking',
      imageUrl : 'assets/images/biking.jpg',
      username : 'Bike',
      content : 'This is Bike',
    },
  ];
}

