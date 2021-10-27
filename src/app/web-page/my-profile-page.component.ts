import { Component, OnInit } from "@angular/core";
import { MyProfileCardInfo } from "../cards/my-profile-card.model";
import { MyProfilePageService } from "./my-profile-page.service";

@Component({
    selector: 'app-my-profile-page',
    templateUrl: 'my-profile-page.component.html',
    styleUrls: ['./my-profile-page.component.css']
})
export class MyProfilePageComponent implements OnInit{
    myProfileCardInfo!: MyProfileCardInfo;

    constructor(private myProfilePageService:MyProfilePageService){

    }

    ngOnInit(): void {
        console.log("registering showMyProfileCardInfo as a subscriber");
        this.showMyProfileCardInfo();
    }

    showMyProfileCardInfo(){
        this.myProfilePageService.getMyProfileCardInfo().subscribe((data: MyProfileCardInfo) => {
            console.log(data);
            this.myProfileCardInfo=data;
        })
    }
}