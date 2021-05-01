import { Component, OnInit } from '@angular/core';

import { HeroService } from './../services/hero.service';
import { Hero } from './../classes/Hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /**
   * Vetor de herois
   */
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  /**
   * Método bom para obter dados de
   * services, por exemplo.
   */
  ngOnInit() {
    this.getHeroes();
  }

  /**
   * Obtendo herois de heroService,
   * que retorna um Observable. Por
   * isso devemos acessá-los com
   * subscribe
   *
   * No caso do dashboard, ficou definido
   * que os "destaques" são os 4 primeiros herois
   */
  getHeroes() {
    this.heroService
      .getHeroes()
      .subscribe(heroes => (this.heroes = heroes.slice(1, 5)));
  }
}
