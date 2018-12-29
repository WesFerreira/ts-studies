/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-29 19:07:33
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-29 19:24:34
 */

import { injectable, inject } from "inversify";
import { IBox2App } from "../interfaces/IBox2App";
import IDENTFIER from "../Identifiers";

@injectable()
export class Box2AppService {
    public debugDraw: Box2D.Dynamics.b2DebugDraw;
    private boxAppDep: IBox2App;
    public create(options: PIXI.RendererOptions): HTMLCanvasElement {
        return this.boxAppDep.create(options);
    }
    public initDebugDraw(): Box2D.Dynamics.b2DebugDraw {
        return this.boxAppDep.initDebugDraw();
    }
    constructor(
        @inject(IDENTFIER.SERVICE.BOX2APP)
        boxApp: IBox2App) {
        this.boxAppDep = boxApp;
        this.debugDraw = this.boxAppDep.debugDraw;
        console.log(this.boxAppDep.debugDraw);
        console.log("Box2App Injected");
    }
}
