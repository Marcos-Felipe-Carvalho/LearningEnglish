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
  
  constructor() { console.log(this.phrases)}

  ngOnInit(): void {
  }

  public updateResponse(): void{
    console.log("Teste")
  }
}
