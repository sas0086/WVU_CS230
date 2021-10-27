import { Component, Input } from "@angular/core";
import { MyProfilePageService } from "../web-page/my-profile-page.service";
import { MyProfileCardInfo } from "./my-profile-card.model";

@Component({
    selector: 'app-my-profile-card',
    templateUrl: 'my-profile-card.component.html',
    styleUrls: ['./my-profile-card.component.css']
})
export class MyProfileCardComponent {
    constructor(private myProfilePageService: MyProfilePageService) {

    }

    onUpdateMyProfileCardInfo(data: MyProfileCardInfo) {
        this.myProfilePageService.modifyMyProfileCardInfo(data).subscribe(data => {
            console.log("Updated information sent to backend");
        });
    }

    @Input()
    PreferredName!: string;
    @Input()
    LastName!: string;
    @Input()
    SchoolYear!: string;
}