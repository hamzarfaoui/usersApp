export class User {
    public name: string;
    public gendre: string;
    public birth_date: string;

    constructor(name: string, gendre: string, birth_date:string)
    {
        this.name = name;
        this.gendre = gendre;
        this.birth_date = birth_date;
    }
}