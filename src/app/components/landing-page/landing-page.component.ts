import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private activatedRoute: ActivatedRoute, private _router: Router) { }

 

  navigate() {
    this._router.navigate(['/login']);
  }

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  
  ngOnInit(): void {
    
  }
}

