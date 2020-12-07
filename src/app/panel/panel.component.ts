import { PHRASES } from './phrases-mock';
import { Phrase } from './../shared/phrases.model';
import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public phrases: Array<Phrase> = PHRASES
  public instruction: string = "Traduza a frase:"
  public response:string

  public round:number = 0
  public roundPhrase: Phrase


  constructor() { 
    this.roundPhrase = this.phrases[this.round]
    console.log(this.roundPhrase)
  }

  ngOnInit(): void {
  }

  public updateResponse(response:Event): void{
    this.response = (<HTMLInputElement>response.target).value
    //console.log(this.response)
  }

  public checkAnswer():void{
    console.log("Verificar resposta: ", this.response)
  }
}
