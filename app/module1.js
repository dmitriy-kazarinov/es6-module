export class Company {
    constructor(name,location) {
        this.name = name;
        this.location = location;
    }
    aboutString() {
        return `Company: ${this.name}, location: ${this.location}`;
    }
}

//test export var
export let start = 10;