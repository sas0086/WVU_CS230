import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-my-profile-card',
    templateUrl: 'my-profile-card.component.html',
    styleUrls: ['./my-profile-card.component.css']
})
export class MyProfileCardComponent{
   @Input()
   PreferredName!:string;
   @Input()
   LastName!:string;
   @Input()
   SchoolYear!:string;
}