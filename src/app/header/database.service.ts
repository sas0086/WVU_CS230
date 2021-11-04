import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { MyProfileCardInfo } from "../cards/my-profile-card.model";

@Injectable({
    providedIn: 'root'
})
export class DataBaseService {
    items: Observable<MyProfileCardInfo | null>
    constructor(private db:AngularFireDatabase) {
        console.log("Setting up firebase communication");
        this.items = this.db.object<MyProfileCardInfo>('my-profile-card-info').valueChanges();
    }

    public showData() {
        this.items.subscribe((data: MyProfileCardInfo | null) => {
            console.log("Data received");
            console.log(data);
        })
    }
}