/** Created by WesFerreira 26/12/18
 * Someone stop me.
 */

import { inject, injectable } from "inversify";
import { Container } from "inversify";
import { App } from "./App";
import { PixiDebugBox2D } from "./PixiDebugBox2D";

@injectable()
export class Service {
    protected appDependency: App;
    protected syncDependency: PixiDebugBox2D;

    /* public getAllNames(): string[] {
        return [this.appDependency.getName(), this.syncDependency.getName()];
    } */

    public add(child) {
        // this.appDependency.sync.stage.addChild(child);
    }

    constructor(
        @inject(App) dA: App,
        @inject(PixiDebugBox2D) dB: PixiDebugBox2D) {
        this.appDependency = dA;
        this.syncDependency = dB;
        console.log("Service");
    }
}

let container = new Container();
container.bind<App>(App).toSelf();
container.bind<PixiDebugBox2D>(PixiDebugBox2D).toSelf();

export default container;
