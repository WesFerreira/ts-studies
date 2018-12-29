/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-28 15:12:35
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 19:01:00
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
    private toRender: OGraphic[] = new Array();
    private view: ViewService;

    constructor() {
        this.world = new Box2D.Dynamics.b2World(this.gravity, true);
        this.view = DepInjector.resolve<ViewService>(ViewService);
        console.log("Stage");
    }

    public initDebugDraw(): Box2D.Dynamics.b2DebugDraw {
        return this.view.initDebugDraw();
    }

    public addChild(object: OGraphic) {
        let graphic: OGraphic = { bodyDef: object.bodyDef, fixtureDef: object.fixtureDef };
        this.toRender.push(graphic);
        console.log("add");
        this.render(graphic);
    }

    public addApps(options: PIXI.RendererOptions): void {
        this.view.addApps(options);
        this.initDebugDraw();
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
