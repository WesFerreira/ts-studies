/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-28 06:24:12
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 19:10:49
 *
 * I find a frog in my room
 */

import { injectable, inject, named } from "inversify";
import {
    IViewService,
    IView,
    OGraphic,
    IStageService,
    IStage,
    IBox2AppService,
    IBox2App,
} from "./_Interfaces";

@injectable()
export class Box2AppService implements IBox2AppService {
    public debugDraw: Box2D.Dynamics.b2DebugDraw;

    private boxAppDep: IBox2App;

    public create(options: PIXI.RendererOptions): HTMLCanvasElement {
        return this.boxAppDep.create(options);
    }
    public initDebugDraw(): Box2D.Dynamics.b2DebugDraw {
        return this.boxAppDep.initDebugDraw();
    }

    constructor(@inject("IBox2App") boxApp: IBox2App) {
        this.boxAppDep = boxApp;
        this.debugDraw = this.boxAppDep.debugDraw;
        console.log(this.boxAppDep.debugDraw);
        console.log("Box2App Injected");
    }
}

@injectable()
export class ViewService implements IViewService {
    public debugDraw: Box2D.Dynamics.b2DebugDraw;

    private viewDep: IView;

    constructor(@inject("IView") view: IView) {
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

