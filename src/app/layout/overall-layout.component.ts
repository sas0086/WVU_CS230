import { Component } from "@angular/core";
import { JobsCard } from "../left-menu/jobs-card.model";

@Component({
    selector: 'app-overall-layout',
    templateUrl: 'overall-layout.component.html',
    styleUrls: ['./overall-layout.component.css']
})
export class OverallLayoutComponent{
    jobs_cards:JobsCard[] = [];
}