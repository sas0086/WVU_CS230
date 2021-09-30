import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent{
    Image_dot: string = "/assets/dot-icon.svg"
    Image_bookmark: string = "/assets/bookmark-icon.svg"
    Location: string = "Arlington County, VA"

    @Input()
    description1!:string;
    @Input()
    description2!:string;
    @Input()
    description3!:string;
    @Input()
    title!:string;
    @Input()
    company!:string;
    @Input()
    remote!:string;
    @Input()
    location!:string;
}