import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  //A variável progress rece parâmetros da classe Panel
  @Input() public progress: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
