import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
// const Height404 = document.getElementById('Height404');
// // tslint:disable-next-line: only-arrow-functions
// window.onmousemove = function(e: { clientX: any; clientY: any; }) {
//   // tslint:disable-next-line: one-variable-per-declaration
//   const x = e.clientX,
//       y = e.clientY;
//   Height404.style.backgroundPositionX = x + 'px';
//   Height404.style.backgroundPositionY = y + 'px';
// };
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
