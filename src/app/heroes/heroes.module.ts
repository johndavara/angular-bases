

import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListHeroComponent } from './list/listHero.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [HeroComponent,ListHeroComponent,],
  declarations: [HeroComponent,ListHeroComponent,],
  providers: [],
})
export class HeroesModule { }
