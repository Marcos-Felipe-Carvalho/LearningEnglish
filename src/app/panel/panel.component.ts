import { PHRASES } from './phrases-mock';
import { Phrase } from './../shared/phrases.model';
import { Component, OnInit, ɵConsole, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, OnDestroy {

  public phrases: Array<Phrase> = PHRASES
  public instruction: string = "Traduza a frase:"
  public response: string = ''

  public round: number = 0
  public roundPhrase: Phrase

  //Progress
  public progress: number = 0

  public attempts: number = 5

  @Output() public endGame: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.updatedRound()
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void{
    console.log("Componente panel destruído")
  }

  public updateResponse(response: Event): void {
    this.response = (<HTMLInputElement>response.target).value
  }

  public checkAnswer(): void {


    if (this.roundPhrase.phrasePtBr == this.response) {
      //alternar pergunta da rodada this.round++
      console.log(this.round)

      this.round++

      //atualiza o objeto roundPhrase
      this.updatedRound()

      //atualiza a barra de progresso
      this.progress = this.progress + (100 / (this.phrases.length))

      //
      if(this.round == 4){
        this.endGame.emit('winning')
      }

    } else {
      //diminuir a variável attempts
      this.attempts--
      
      if(this.attempts == -1){
        this.endGame.emit('loser')
      }
    }
  }

  public updatedRound(): void {
    //define a rodada da frase
    this.roundPhrase = this.phrases[this.round]
    //limpar resposta do usuário
    this.response = ''
  }
}
