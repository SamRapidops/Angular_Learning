import { Component , ElementRef , ViewChild , AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  pageTitle = 'Angular Component Interaction';
  imgUrl = 'http://picsum.photos/200';
  name: string;
  username: string;
  private _customerName: string;
  @ViewChild('nameRef') nameElementRef: ElementRef;

  ngAfterViewInit() {
  	this.nameElementRef.nativeElement.focus();
  }

  // getter setter
  get customerName(): string {
  	return this._customerName;
  }

  set customerName(value: string) {
  	this._customerName = value;
  	if(value === 'Sam') {
  		alert('Hey Sam');
  	}
  }

  count = 0;
  incrementCount() {
  	this.count += 1;
  }

  greetSam(updatedValue) {
  	this.username = updatedValue;
  	if(updatedValue === 'Sam') {
  		alert('welcome Sam');
  	}
  }
}
