import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const template: string = require('./conferences.html');

@Component({
  selector: 'conferences',
  template
})

export class ConferencesComponent {

	constructor(activatedRoute: ActivatedRoute) {
		const snapshot = activatedRoute.snapshot;
  }
}