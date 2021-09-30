export class JobsCard{
    description1:string;
    title:string;
    company:string;

    constructor({description1, title, company} :
        {description1:string, title:string, company:string}){
            this.description1=description1;
            this.title=title;
            this.company=company;
    }
}