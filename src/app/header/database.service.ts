import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { MyProfileCardInfo } from "../cards/my-profile-card.model";

@Injectable({
    providedIn: 'root'
})
export class DataBaseService {
    items: Observable<MyProfileCardInfo []>
    constructor(private db:AngularFireDatabase) {
        console.log("Setting up firebase communication");
        this.items = this.db.list<MyProfileCardInfo>('my-profile-card-info').valueChanges();
    }

    public showData() {
        this.items.subscribe((data: MyProfileCardInfo []) => {
            console.log("Data received");
            for (let item of data) {
                console.log(item);
            }
        })
    }
}