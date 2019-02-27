export class Todo {
    id: number;
    label: string;
    description: string;
    check: boolean;

    fromJson(json: any) {
       this.id = json.id;
       this.label = json.label;
       this.description = json.description;
       if(json.done === "n"){
        this.check = false;
       }
       if(json.done === "y"){
        this.check = true;
       }
    }
}