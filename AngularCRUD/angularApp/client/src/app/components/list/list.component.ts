import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  private users: User[];

  constructor(private _userService:UserService,
  			  private router: Router) { }

  ngOnInit() {
  	this.readUsers();
  }

  readUsers() {
  	this._userService.readUsers().subscribe(
  		data => { 
  			console.log(data);
  			this.users=data['msg'];
  		 },
  		error => { console.log(error); }
  	)
  }

  doUpdate(user) {
  	this._userService.setter(user);
  	this.router.navigate(['/createUpdate']);
  }

  doDelete(user) {
  	this._userService.deleteUser(user._id).subscribe(
  		data => {
  			this.users.splice(this.users.indexOf(user),1);
  		},
  		error => {
  			//console.log(error);
  		}
  	)
  }

}
