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
export class ViewService implements IView {
    public pixiApp: PIXI.Application;
    public debugDraw: Box2D.Dynamics.b2DebugDraw;

    private viewDep: IView;

    constructor(@inject(IDENTFIER.SERVICE.VIEW) view: IView) {
        this.viewDep = view;
        this.debugDraw = this.viewDep.debugDraw;
        this.pixiApp = this.viewDep.pixiApp;
        console.log("View Injected");
    }
}
