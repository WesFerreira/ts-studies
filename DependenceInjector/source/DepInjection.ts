import { DependencyA, DependencyB } from "./dependences";
import { inject, injectable } from "inversify";
import { Container } from "inversify";

@injectable()
export class Service {
    protected dA: DependencyA;
    protected dB: DependencyB;

    public getAllNames(): string[] {
        return [this.dA.getName(), this.dB.getName()];
    }

    constructor(
        @inject(DependencyA) dA: DependencyA,
        @inject(DependencyB) dB: DependencyB) {
        this.dA = dA;
        this.dB = dB;
        console.log("Service");
    }
}

let container = new Container();
container.bind<DependencyA>(DependencyA).toSelf();
container.bind<DependencyB>(DependencyB).toSelf();

export default container;
