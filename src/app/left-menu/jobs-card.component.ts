import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-jobs-card',
    templateUrl: 'jobs-card.component.html',
    styleUrls: ['./jobs-card.component.css']
})
export class JobsCardComponent{
    Image_dot: string = "/assets/dot-icon.svg"
    Image_bookmark: string = "/assets/bookmark-icon.svg"
    Location: string = "Arlington County, VA"

    @Input()
    description!:string;
    @Input()
    title!:string;
    @Input()
    company!:string;
    @Input()
    location!:string; 
}