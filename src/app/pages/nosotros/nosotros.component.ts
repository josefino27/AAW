import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit{

  constructor() { }

  ngOnInit() {
    document.body.scrollTo({
      top:0, left:0, behavior: 'smooth'
    });
  }


}
