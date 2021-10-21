import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JobsCardInfo } from "../left-menu/jobs-card.model";

@Injectable({providedIn: 'root'})
export class OverallLayoutService{
    private baseUrl:string = 'https://handshake-app-49bb0-default-rtdb.firebaseio.com/';
    private jobsCardInfoEndpoint:string = 'jobs-card-info/';
    private jobsCardInfo1:string ="one.json";
    private jobsCardInfo2:string ="two.json";
    private jobsCardInfo3:string ="three.json";
    
    constructor(private http:HttpClient){
        
    }

    getJobsCardInfo1(){
        return this.http.get<JobsCardInfo>(this.baseUrl + this.jobsCardInfoEndpoint + this.jobsCardInfo1);
    }

    getJobsCardInfo2(){
        return this.http.get<JobsCardInfo>(this.baseUrl + this.jobsCardInfoEndpoint + this.jobsCardInfo2);
    }

    getJobsCardInfo3(){
        return this.http.get<JobsCardInfo>(this.baseUrl + this.jobsCardInfoEndpoint + this.jobsCardInfo3);
    }
}