import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  public heroNames: string[] = ['Spiderman', 'Hulk', 'Thor', 'Shazam', 'Batman']
  public lastDeletedHero?: string;

  public removeLastHero(): void {
    this.lastDeletedHero = this.heroNames.pop();
  }
}
