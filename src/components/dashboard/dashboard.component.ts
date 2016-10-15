import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';

const template: string = require('./dashboard.html');

@Component({
    selector: 'dashboard',
    template,
    providers: [ DashboardService ]
})

export class DashboardComponent {
    attendeeList: any;
    selectOptions: any = ["All", "Attended", "Not Attended"];
    selectedOption: any = 'All'

    constructor(private _dashboardService: DashboardService) {
        this.attendeeList = this.getChannelUsersData();
    }

    /**
     * [getChannelUsersData Get a list of Js channel users]
     */
    getChannelUsersData() {
    	return this._dashboardService.getJavaScriptMeetupUsers();
    }
}