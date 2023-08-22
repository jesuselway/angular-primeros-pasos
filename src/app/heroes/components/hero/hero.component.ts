import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  private readonly IRON_MAN = 'Iron man';
  private readonly EDAD = 45;

  public name: string = this.IRON_MAN;
  public age: number = this.EDAD;


  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name } - ${this.age}`;
  }

  changehero():void {
    this.name = 'Spider-man'
  }

  changeAge():void {
    this.age = 89;
  }

  resetForm() {
    this.name = this.IRON_MAN;
    this.age = this.EDAD;
  }

}
