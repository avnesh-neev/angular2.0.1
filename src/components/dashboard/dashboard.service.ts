import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

    /**
     * [getJavaScriptMeetupUsers Static list of attendees]
     */
    getJavaScriptMeetupUsers() {
        return [
            { "name": "avnesh shakya", "designation":"Frontend Engineer", "isAttended": "Attended", "noOfConfAttended": 10 },
            { "name": "nimmy babu", "designation":"Frontend Engineer", "isAttended": "Not Attended", "noOfConfAttended": 0 },
            { "name": "kaushik gotefode", "designation":"Frontend Engineer", "isAttended": "Attended", "noOfConfAttended": 5 },
            { "name": "debashish sahu", "designation":"Frontend Engineer", "isAttended": "Not Attended", "noOfConfAttended": 0 },
            { "name": "archana tiwari", "designation":"Frontend Engineer", "isAttended": "Not Attended", "noOfConfAttended": 0 },
            { "name": "divy mittal", "designation":"Frontend Engineer", "isAttended": "Attended", "noOfConfAttended": 6 },
            { "name": "piyush bageria", "designation":"Frontend Lead", "isAttended": "Not Attended", "noOfConfAttended": 0 },
            { "name": "manoj victor", "designation":"Senior Frontend Engineer", "isAttended": "Not Attended", "noOfConfAttended": 0 },
            { "name": "peeyush patil", "designation":"Frontend Engineer", "isAttended": "Attended", "noOfConfAttended": 3 },
            { "name": "adarsh niket", "designation":"Senior Fullstack Engineer", "isAttended": "Attended", "noOfConfAttended": 2 }
        ]
    }
}