import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JobsCardInfo } from "../cards/jobs-card.model";

@Injectable({providedIn: 'root'})
export class OverallLayoutService{
    private baseUrl:string = 'https://handshake-app-49bb0-default-rtdb.firebaseio.com/'
    private jobsCardInfoEndpoint:string = 'jobs-card-info.json'

    constructor(private http:HttpClient){
        
    }

    getJobsCardInfo(){
        return this.http.get<JobsCardInfo[]>(this.baseUrl + this.jobsCardInfoEndpoint);
    }
}