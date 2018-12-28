/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-28 15:12:35
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 17:28:24
 *
 *  To refactor is boring me
 */

import { OGraphic, IStage, IStageService, IViewService } from "./_Interfaces";
import { injectable } from "inversify";
import { ViewService } from "./Services";
import DepInjector from "./DepInjection";

@injectable()
export class Stage implements IViewService {
    private world: Box2D.Dynamics.b2World;
    private gravity = new Box2D.Common.Math.b2Vec2(0, 9.8);
    private graphics: OGraphic[] = new Array();
    private toRender: OGraphic[] = new Array();
    private view: ViewService;

    constructor() {
        this.world = new Box2D.Dynamics.b2World(this.gravity, true);
        this.view = DepInjector.resolve<ViewService>(ViewService);
        console.log("Stage");
    }

    public addChild(object: OGraphic) {
        let graphic: OGraphic = { bodyDef: object.bodyDef, fixtureDef: object.fixtureDef };
        this.toRender.push(graphic);
        console.log("add");
        this.render(graphic);
    }

    public addApps(options: PIXI.RendererOptions): void {
        this.view.addApps(options);
    }

    public render(graphic): void {
        this.world.CreateBody(graphic.bodyDef).CreateFixture(graphic.fixtureDef);
        this.setupDebugDraw();
        console.log("render");
    }
    private setupDebugDraw() {
        this.world.SetDebugDraw(this.view.debugDraw);
        this.world.DrawDebugData();
        console.log(this.view.debugDraw);
        console.log("setupDebugDraw");
    }

}
