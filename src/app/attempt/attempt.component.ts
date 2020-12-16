import { Heart } from './../shared/heart.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit, OnChanges {

  @Input() public attempts: number

  public hearts: Array<Heart> = [
    new Heart(true), new Heart(true), new Heart(true), new Heart(true), new Heart(true)
  ]

  constructor() {
  }
  ngOnChanges(): void{

    if(this.attempts != this.hearts.length){
      let index = this.hearts.length - this.attempts
      this.hearts[index - 1].full = false
    }
  }
  ngOnInit(): void {
  }

}
