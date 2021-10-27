import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MyProfileCardInfo } from "../cards/my-profile-card.model";

@Injectable({providedIn: 'root'})
export class MyProfilePageService{
    private baseUrl:string = 'https://handshake-app-49bb0-default-rtdb.firebaseio.com/';
    private myProfileCardInfoEndpoint:string = 'my-profile-card-info.json';
    constructor(private http:HttpClient){
        
    }

    getMyProfileCardInfo(){
        return this.http.get<MyProfileCardInfo>(this.baseUrl + this.myProfileCardInfoEndpoint);
    }

    modifyMyProfileCardInfo(data:MyProfileCardInfo){
        return this.http.put<MyProfileCardInfo>(this.baseUrl + this.myProfileCardInfoEndpoint, data);
    }
}