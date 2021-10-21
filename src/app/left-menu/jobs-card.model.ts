export class JobsCardInfo{
    description:string;
    title:string;
    company:string;
    location:string;
    

    constructor({description, title, company, location} :
        {description:string, title:string, company:string, location:string}){
            this.description=description;
            this.title=title;
            this.company=company;
            this.location=location;
    }
}