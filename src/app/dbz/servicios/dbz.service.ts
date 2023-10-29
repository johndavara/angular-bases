import { Injectable } from '@angular/core';



import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  constructor() { }

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 500
  },{
    id: uuid(),
    name: 'Goku',
    power:10000
  },{
    id: uuid(),
    name: 'Vegetta',
    power: 7500
  }];

  public addCharacter(character: Character){
    debugger;
    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }
    this.characters.push(newCharacter)
  }

  public onDeleteId(index: number){
    debugger;
    this.characters.splice(index,1);
  }

  public deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
