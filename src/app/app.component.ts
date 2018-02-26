import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myData:Array<any>;
  constructor(){
    this.myData = [
      {
        "albumId": 1,
        "id": 1,
        "title": "Imagen 1",
        "url": "http://apinube.com/Lenna.png",
        "thumbnailUrl": "http://placehold.it/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "Imagen 2",
        "url": "http://apinube.com/Lenna.png",
        "thumbnailUrl": "http://placehold.it/150/771796"
      }
    ];
  }
}
