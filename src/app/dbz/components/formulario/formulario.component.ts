import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {id: '', name:'', poder:0};

  addCharacter() {
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character.id = '';
    this.character.name = "";
    this.character.poder = 0;
  }
}
