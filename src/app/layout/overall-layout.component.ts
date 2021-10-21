import { Component, OnInit } from "@angular/core";
import { JobsCardInfo } from "../left-menu/jobs-card.model";
import { OverallLayoutService } from "./overall-layout.service";
import { mock_jobs_cards } from "../left-menu/mock-jobs-card"; //remove

@Component({
    selector: 'app-overall-layout',
    templateUrl: 'overall-layout.component.html',
    styleUrls: ['./overall-layout.component.css']
})
export class OverallLayoutComponent implements OnInit{
    jobsCardInfo: JobsCardInfo | undefined;
    jobs_cards:JobsCardInfo[] = [];

    constructor(private overallLayoutService:OverallLayoutService){
        for (var jobs_card of mock_jobs_cards){  //remove
            this.jobs_cards.push(new JobsCardInfo(jobs_card)); //remove
        } //remove
    }
    ngOnInit(): void {
        console.log("registering showJobsCardInfo as a subscriber");
        this.showJobsCardInfo();
    }
        showJobsCardInfo(){
        this.overallLayoutService.getJobsCardInfo1().subscribe((data: JobsCardInfo) => {
            console.log(data);
            this.jobsCardInfo=data;
        })
        this.overallLayoutService.getJobsCardInfo2().subscribe((data: JobsCardInfo) => {
            console.log(data);
            this.jobsCardInfo=data;
        })
        this.overallLayoutService.getJobsCardInfo3().subscribe((data: JobsCardInfo) => {
            console.log(data);
            this.jobsCardInfo=data;
        })
    }
}