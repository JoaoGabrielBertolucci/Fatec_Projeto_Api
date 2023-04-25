import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit{
  constructor(private dogService: DogService) { }
  
  LoadDog(){
    this.dogService.getRandomDog().subscribe(
      {
        next : dog => this.dog = dog
      }
    );
  }
  
  ngOnInit(): void {
    this.LoadDog();
    }

    dog : Dog = {} as Dog;

 

  
  
  getName(){
    return this.dog.message.split("/")[4].split("-");
  }

  funtionLoadDog(){
    
  }


}

