/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-28 06:24:12
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 06:26:17
 *
 * I find a frog in my room
 */

import { injectable, inject } from "inversify";
import { IDebuggerService, IDebugger, OGraphic } from "./_Interfaces";

@injectable()
export class DebuggerService implements IDebuggerService {
    private debugDep: IDebugger;

    public renderAll(toRender: OGraphic[]) {
        this.debugDep.renderAll(toRender);
    }
    public createCircle(): OGraphic {
        return this.debugDep.createCircle();
    }
    public addChild(child: OGraphic): OGraphic {
        return this.debugDep.add(child);
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
