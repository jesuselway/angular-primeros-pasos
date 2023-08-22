import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  onDelete: EventEmitter<string>= new EventEmitter();

  public onDelecteCharacter(id: string):void {
    console.log(id);
    this.onDelete.emit(id);
  }

}
