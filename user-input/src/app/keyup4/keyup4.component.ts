import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup4',
  templateUrl: './keyup4.component.html',
  styleUrls: ['./keyup4.component.css']
})
export class Keyup4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value = '';
  update(value: string) { 
  	this.value = value; 
  }
}
