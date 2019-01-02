/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-27 04:09:30
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 16:29:15
 *
 * * ALmost new year...
 */

import { injectable } from "inversify";
import { AppService } from "../services/AppService";
import dependencyContainer from "../config/InversionOfControl";
import { IView } from "../interfaces/IView";
import { IForwarder } from "../interfaces/IForwarder";

@injectable()
export class View implements IView, IForwarder {
    /////////// Forwards ///////////
    public pixiApp: PIXI.Application;
    public debugDraw: Box2D.Dynamics.b2DebugDraw;
    ////////////////////////////////
    private box2App: AppService;

    public forward(): void {
        this.debugDraw = this.box2App.debugDraw;
        this.pixiApp = this.box2App.pixiApp;
    }

    constructor() {
        this.box2App = dependencyContainer.resolve<AppService>(AppService);
        this.forward();
        console.log("View");
    }
}
