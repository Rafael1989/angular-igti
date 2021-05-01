import { MessageService } from './../services/message.service';
import { Component, OnInit } from '@angular/core';

import { HeroService } from './../services/hero.service';
import { Hero } from './../classes/Hero';

@Component({
  selector: 'app-hero',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  /**
   * Colocar as injeções de dependência
   * como parâmetros
   */
  constructor(
    private heroService: HeroService,
    public messageService: MessageService
  ) {}

  /** Inicializar os atributos da classe */
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
}
