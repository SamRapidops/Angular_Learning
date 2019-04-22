import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  values = '';

  onKey(event: any) {
  	this.values += event.target.value + ' | ';
  }

}


