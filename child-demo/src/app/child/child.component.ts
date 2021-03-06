import { Component, OnInit , Input , OnChanges , SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
	
  @Input() loggedIn: boolean;
  message: string;
  name: 'Samarth'

 // get loggedIn(): boolean {
 // 	return this._loggedIn;
 // }

  //@Input()
  //set loggedIn(value: boolean) {
  //	this._loggedIn = value;
  //	if(value === true) {
  //		this.message = 'welcome sam';
  //	} 
  //	else {
  //	this.message = 'please log in';
  //	}
  //}

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
  	console.log(changes);
  	const loggedInValue = changes['loggedIn'];
  	if(loggedInValue.currentValue === true) {
  		this.message = "Welcome back Sam";
  	}else {
  		this.message = "Please log in";
  	}
  }

  greetSam() {
  	alert('hey Sam!!!!');
  }

}
