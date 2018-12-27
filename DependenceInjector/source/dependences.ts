import {injectable} from "inversify";

@injectable()
export class DependencyA {
    private readonly name: string = "dependencyA";

    public getName(): string {
        return this.name;
    }

    constructor() {
        console.log("DependencyA");
    }
}

@injectable()
export class DependencyB {
    private readonly name: string = "dependencyB";

    public getName(): string {
        return this.name;
    }

    constructor() {
        console.log("DependencyB");
    }
}

