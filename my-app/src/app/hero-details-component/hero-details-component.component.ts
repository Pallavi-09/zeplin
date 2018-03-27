import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
  
@Component({
  selector: 'app-hero-details-component',
  templateUrl: './hero-details-component.component.html',
  styleUrls: ['./hero-details-component.component.css']
})
export class HeroDetailsComponentComponent implements OnInit {

  @Input() hero: Hero;
 
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void{
    const id = +this.route.snapshot.paramMap.get("id");
    console.log(id);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }

}
