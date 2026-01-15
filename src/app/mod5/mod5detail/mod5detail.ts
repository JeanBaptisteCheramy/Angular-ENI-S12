import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-mod5detail',
  imports: [],
  templateUrl: './mod5detail.html',
  styleUrl: './mod5detail.css',
  standalone: true,
})
export class Mod5detail {
  public id: string | null;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
