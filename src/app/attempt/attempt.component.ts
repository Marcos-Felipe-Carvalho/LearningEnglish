import { Heart } from './../shared/heart.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {

  public emptyHeart:string = '/assets/empty_heart.png'
  public fullHeart :string = '/assets/full_heart.png'

  public hearts: Array<Heart> = [
    new Heart(true),new Heart(true),new Heart(true)
  ]

  constructor() { 
    console.log(this.hearts)
  }

  ngOnInit(): void {
  }

}
