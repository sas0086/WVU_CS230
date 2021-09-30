import { Component } from "@angular/core";
import { JobsCard } from "../left-menu/jobs-card.model";
import { mock_jobs_cards } from "../left-menu/mock-jobs-card";

@Component({
    selector: 'app-overall-layout',
    templateUrl: 'overall-layout.component.html',
    styleUrls: ['./overall-layout.component.css']
})
export class OverallLayoutComponent{
    jobs_cards:JobsCard[] = [];

    constructor(){
        for (var jobs_card of mock_jobs_cards){
            this.jobs_cards.push(new JobsCard(jobs_card));
        }
    }
}