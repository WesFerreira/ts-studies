import { DependencyA, DependencyB, DependencyC, Type } from "./dependences";
import { inject, injectable } from "inversify";
import { Container } from "inversify";
import { Dependency, IType } from "./_Interfaces";

@injectable()
export class Service {
    protected dA: DependencyA;
    protected dB: DependencyB;
    protected dC: Dependency;

    public getAllNames(): string[] {
        return [this.dA.getName(), this.dB.getName(), this.dC.getName()];
    }

    constructor(
        @inject(DependencyA) dA: DependencyA,
        @inject(DependencyB) dB: DependencyB,
        @inject("Dependency") dC: Dependency) {
        this.dA = dA;
        this.dB = dB;
        this.dC = dC;
        console.log("Service");
    }
}

export function initDependencyC(val: IType) {
    container.bind<IType>("IType").toConstantValue(val).whenInjectedInto(DependencyC);
}

let container = new Container();
container.bind<DependencyA>(DependencyA).toSelf();
container.bind<DependencyB>(DependencyB).toSelf();
container.bind<Dependency>("Dependency").to(DependencyC);
// container.bind<IType>("IType").toConstantValue({ name: "kkkkkkk" }).whenInjectedInto(DependencyC);
// container.bind<DependencyC>("DependencyC").toSelf();

export default container;
