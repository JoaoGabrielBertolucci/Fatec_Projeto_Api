import { Component } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent {
  dog: Dog = { 
  "message": "https://images.dog.ceo/breeds/terrier-patterdale/patterdale-terrier-1330018870tnN.jpg",
  "status": "success"
  } as Dog;

  getName(){
    return this.dog.message.split("/")[4].split("-");
  }

}
