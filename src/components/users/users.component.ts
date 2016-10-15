import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Modal } from '../my-modal/myModal.component';

const template: string = require('./users.html');

@Component({
  selector: 'users',
  template,
  providers: [ UsersService ]
})

export class UsersComponent {
	usersRepo: any;
	errorMessage: any;
	isModalOpen: boolean;
	selectedRepo: any = {};

	constructor(private _usersService: UsersService) {
		this.isModalOpen = false;
		this.getUsersRepoData();
	}

	getUsersRepoData() {
		this._usersService.getUsers()
			.subscribe(usersRepo => {
				this.usersRepo = usersRepo;
				console.log(this.usersRepo);
			}, 
			error => {
				this.errorMessage = <any> error;
			});
	}

	showDetail(modal: Modal, repo) {
		this.selectedRepo = repo;
		modal.show();
	}
}