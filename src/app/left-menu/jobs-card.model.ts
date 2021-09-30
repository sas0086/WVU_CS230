export class JobsCard{
    description1:string;
    description2:string;
    description3:string;
    title:string;
    company:string;
    remote:string;
    location:string;
    

    constructor({description1, description2, description3, title, company, remote, location} :
        {description1:string, description2:string, description3:string, title:string, company:string, remote:string, location:string}){
            this.description1=description1;
            this.description2=description2;
            this.description3=description3;
            this.title=title;
            this.company=company;
            this.remote=remote;
            this.location=location;
    }
}