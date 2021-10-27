import { Component, OnInit } from "@angular/core";
import { JobsCardInfo } from "../cards/jobs-card.model";
import { OverallLayoutService } from "./overall-layout.service";

@Component({
    selector: 'app-overall-layout',
    templateUrl: 'overall-layout.component.html',
    styleUrls: ['./overall-layout.component.css']
})
export class OverallLayoutComponent implements OnInit{
    jobsCardsInfo: JobsCardInfo[] | undefined;

    constructor(private overallLayoutService:OverallLayoutService){
        
    }
    ngOnInit(): void {
        console.log("registering showJobsCardInfo as a subscriber");
        this.showJobsCardInfo();
    }
        showJobsCardInfo(){
        this.overallLayoutService.getJobsCardInfo().subscribe((data: JobsCardInfo[]) => {
            console.log(data);
            this.jobsCardsInfo=data;
        })
    }
}