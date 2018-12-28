/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-28 06:24:12
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 16:28:01
 *
 * I find a frog in my room
 */

import { injectable, inject } from "inversify";
import { IViewService, IView, OGraphic, IStageService, IStage } from "./_Interfaces";

@injectable()
export class ViewService implements IViewService {
    public debugDraw: Box2D.Dynamics.b2DebugDraw;

    private viewDep: IView;

    public addApps(options: PIXI.RendererOptions) {
        this.viewDep.addBox2App(options);
        this.viewDep.addPixiApp(options);
    }
    constructor(@inject("IView") view: IView) {
        this.viewDep = view;
        this.debugDraw = this.viewDep.debugDraw;
        console.log(this.viewDep.debugDraw);
        console.log("View Injected");
    }
}

@injectable()
export class StageService implements IStageService {
    private stageDep: IStage;

    public addApps(options: PIXI.RendererOptions) {
        this.stageDep.addApps(options);
    }

    public addChild(child: OGraphic) {
        this.stageDep.addChild(child);
    }

    constructor(@inject("IStage") stage: IStage) {
        this.stageDep = stage;
        console.log("Stage Injected");
    }
}

