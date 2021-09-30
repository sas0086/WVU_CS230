export class JobsCard{
    description:string;
    title:string;
    location:string;

    constructor({description, title, location} :
        {description:string, title:string, location:string}){
            this.description=description;
            this.title=title;
            this.location=location;
    }
}