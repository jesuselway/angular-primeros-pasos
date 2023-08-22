import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from "uuid";

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }


  public characters: Character[] = [
    {
      id: uuid(),
      name: "Krillin",
      poder: 1000
    },
    {
      id: uuid(),
      name: "Goku",
      poder: 10000
    }
  ];

  addCharacter(character: Character) {
    this.characters.push({id:uuid(), name: character.name, poder: character.poder});
  }

  deleteCharacter(id: string):void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
