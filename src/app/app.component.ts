import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public gameInProgress: boolean = true
  public closureType: string

  public endGame(kind: string):void{
    this.gameInProgress = false
    this.closureType = kind
  }

  public resetGame():void{
    this.gameInProgress = true
    this.closureType = undefined
  }
}
