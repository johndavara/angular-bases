import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './listHero.component.html',
  styleUrls: ['./listHero.component.css']
})
export class ListHeroComponent {

  public heroNames: string[] = ['Spiderman','Ironman','She Hulk', 'Hulk', 'Dr Strange'];
  public deletedHero?: string;
  removeLastHero(): void{
    this.deletedHero = this.heroNames.pop();
  }

}
