import { DependencyA, DependencyB } from "./dependences";
import { inject, injectable } from "inversify";

@injectable()
export class Service {
    @inject(DependencyA) protected dA: DependencyA;
    @inject(DependencyB) protected dB: DependencyB;

    public getAllNames(): string[] {
        return [this.dA.getName(), this.dB.getName()];
    }
}
