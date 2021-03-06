import { Component, OnInit, Input } from '@angular/core';
import { Heroes } from '../heroes/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Heroes;

  constructor() { }

  ngOnInit() {
  }

}