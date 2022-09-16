import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() showIdentificator = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onShowRecipe(display:string){
    this.showIdentificator.emit(display);
  }
  onShowShoping(display:string){
    this.showIdentificator.emit(display);
  }
}
