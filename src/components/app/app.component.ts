import { Component } from '@angular/core';
import { GlobalService } from './global.service';
import { APIConfigurations } from './apiconfig.service';

@Component({
    selector: 'app',
    providers: [ APIConfigurations, GlobalService ],
    template: `
<main>
	<header></header> 
	<div id="wrapper">
		<div id="page-content-wrapper">
			<router-outlet></router-outlet>
		</div>
	</div>
	<footer></footer>
</main>
`
})
export class AppComponent {
}
