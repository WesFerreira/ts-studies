/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-29 19:07:53
 * @Last Modified by:   WesFerreira
 * @Last Modified time: 2018-12-29 19:07:53
 */

import { injectable, inject } from "inversify";
import { IView } from "../interfaces/IView";
import IDENTFIER from "../Identifiers";

@injectable()
export class ViewService {
    public debugDraw: Box2D.Dynamics.b2DebugDraw;
    private viewDep: IView;
    constructor(
        @inject(IDENTFIER.SERVICE.VIEW)
        view: IView) {
        this.viewDep = view;
        this.debugDraw = this.viewDep.debugDraw;
        console.log(this.viewDep.debugDraw);
        console.log("View Injected");
    }
    public addApps(options: PIXI.RendererOptions) {
        this.viewDep.createBox2App(options);
        // this.viewDep.addPixiApp(options);
    }
    public initDebugDraw(): Box2D.Dynamics.b2DebugDraw {
        return this.viewDep.initDebugDraw();
    }
}
