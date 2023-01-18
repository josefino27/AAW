import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

@ViewChild('navbarNavAltMarkup')navbarNavAltMarkupRef!: ElementRef;

  constructor( private renderer2: Renderer2) { 

    ;
  }

  ngOnInit(): void {
  }
  onclick() {
    let element = this.navbarNavAltMarkupRef.nativeElement;
    this.renderer2.removeClass(element,'show')
}
}
