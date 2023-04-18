import { Component } from '@angular/core';
import { Dog } from '../dog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from './dog';
import { Injectable } from '@angular/core';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadDog();
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.LoadDog();
  }

  funtionLoadDog(){
    
  }
  getRandom(): Observable<Dog>{
      return this.http.get<Dog>("https://dog.ceo/api/breeds/image/random");
  }


   LoadDog(){
    this.Dogservice.
  }
  getRandom(): Observable<Dog>{
      return this.http.get<Dog>("https://dog.ceo/api/breeds/image/random");
  }


}
