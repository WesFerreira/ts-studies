/** Created by WesFerreira 26/12/18
 * Someone stop me.
 */

import { inject, injectable } from "inversify";
import { Container } from "inversify";
import { IDebugger } from "./_Interfaces";
import { Debugger } from "./Debugger";


let container = new Container();

container.bind<IDebugger>("IDebugger").to(Debugger);

export default container;
///////////////////////////////////////////////////////////

@injectable()
export class DebuggerService {
    private debugDep: IDebugger;

    public create() {
        return this.debugDep.createCircle();
    }
    public render() {
        this.debugDep.renderAll();
    }
    public addApps(options: PIXI.RendererOptions) {
        this.debugDep.addBox2App(options);
        this.debugDep.addPixiApp(options);
    }

    constructor(@inject("IDebugger") debugDep: IDebugger) {
        this.debugDep = debugDep;
        console.log("Service");
    }
}

