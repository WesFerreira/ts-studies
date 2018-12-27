import { Singleton } from "./singleton";

export class Master {
    private single: Singleton;

    public getNames() {
        return this.single.names();
    }
    constructor() {
        this.single = Singleton.getInstance();
    }
}
