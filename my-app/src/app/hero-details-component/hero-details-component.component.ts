import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-hero-details-component',
  templateUrl: './hero-details-component.component.html',
  styleUrls: ['./hero-details-component.component.css']
})
export class HeroDetailsComponentComponent implements OnInit {

  @Input() hero: Hero;
 
  constructor() { }

  ngOnInit() {
  }

}
