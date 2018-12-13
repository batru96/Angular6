import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Bucky Roberts'
  };
  
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero) {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

}
