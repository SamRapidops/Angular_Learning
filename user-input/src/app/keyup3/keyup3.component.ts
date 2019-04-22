import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup3',
  templateUrl: './keyup3.component.html',
  styleUrls: ['./keyup3.component.css']
})
export class Keyup3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  value='';
  onEnter(value: string) {
  	this.value = value;
  }
}
