import {injectable, inject, named} from "inversify";
import { Dependency, IType } from "./_Interfaces";
import container from "./DepInjection";

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

@injectable()
export class DependencyC implements Dependency {
    public arg: IType;

    private readonly name: string = "dependencyC";

    public getName(): string {
        return this.name + " arg: " + this.arg;
    }
    constructor(@inject("IType") arg: IType) {
        this.arg = arg;
        console.log("DependencyC, arg: " + this.arg.name);
    }
}

@injectable()
export class Type implements IType {
    public name = "dependencyC";
}

