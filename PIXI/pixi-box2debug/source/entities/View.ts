/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-27 04:09:30
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 16:29:15
 *
 * * ALmost new year...
 */

import { injectable } from "inversify";
import { Box2AppService } from "../services/Box2AppService";
import dependencyContainer from "../config/InversionOfControl";

@injectable()
export class View {
    public debugDraw: Box2D.Dynamics.b2DebugDraw;

    private pixiApp: PIXI.Application;
    private box2App: Box2AppService;

    constructor() {
        this.box2App = dependencyContainer.resolve<Box2AppService>(Box2AppService);
        this.debugDraw = this.box2App.debugDraw;
        console.log("View");
    }

    public initDebugDraw(): Box2D.Dynamics.b2DebugDraw {
       return this.box2App.initDebugDraw();
    }
    public createBox2App(options: PIXI.RendererOptions): HTMLCanvasElement {
        return this.box2App.create(options);
    }
    public addPixiApp(options: PIXI.RendererOptions) {
        this.pixiApp = new PIXI.Application(options);
        this.pixiApp.view.setAttribute("id", "rendererView");
        document.body.appendChild(this.pixiApp.view);
        console.log("addPixiApp");
    }
}
