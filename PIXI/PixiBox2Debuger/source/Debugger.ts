/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-27 04:09:30
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 07:03:29
 *
 * * ALmost new year...
 */

import { injectable } from "inversify";
import { OGraphic, IDebugger } from "./_Interfaces";

@injectable()
export class Debugger implements IDebugger {
    private pixiApp: PIXI.Application;
    private box2App: HTMLCanvasElement;
    private world: Box2D.Dynamics.b2World;
    private gravity = new Box2D.Common.Math.b2Vec2(0, 9.8);
    private context: CanvasRenderingContext2D;
    private debugDraw: Box2D.Dynamics.b2DebugDraw;
    private graphics: OGraphic[] = new Array();

    constructor() {
        this.world = new Box2D.Dynamics.b2World(this.gravity, true);
        console.log("Debugger");
    }

    //////////////////// VIEWS ////////////////////
    public addBox2App(options: PIXI.RendererOptions) {
        this.box2App = document.createElement("canvas");
        this.box2App.width = options.width;
        this.box2App.height = options.height;
        this.box2App.setAttribute("id", "debuggerView");
        this.box2App.style.cssText = "background-color: rgba(255, 255, 255, 0.5); position: absolute;";
        document.body.appendChild(this.box2App);

        this.context = this.box2App.getContext("2d");
        this.debugDraw = new Box2D.Dynamics.b2DebugDraw();
        this.debugDraw.SetSprite(this.context);
        this.debugDraw.SetDrawScale(30);
        this.debugDraw.SetFillAlpha(0.3);
        this.debugDraw.SetLineThickness(1.0);
        this.debugDraw.SetFlags(Box2D.Dynamics.b2DebugDraw.e_shapeBit || Box2D.Dynamics.b2DebugDraw.e_jointBit);

    }
    public addPixiApp(options: PIXI.RendererOptions) {
        this.pixiApp = new PIXI.Application(Object.assign(options, { forceCanvas: false }));
        this.pixiApp.view.setAttribute("id", "rendererView");
        document.body.appendChild(this.pixiApp.view);
    }

    //////////////////// STAGE ////////////////////
    public add(object: OGraphic): OGraphic {
        let graphic: OGraphic = { bodyDef: object.bodyDef, fixtureDef: object.fixtureDef };
        this.graphics.push(graphic);
        console.log("add");
        return graphic;
    }

    public render(toRender: OGraphic[]): void {
        let _this = this;

        toRender.forEach(function (graphic) {
            _this.world.CreateBody(graphic.bodyDef).CreateFixture(graphic.fixtureDef);
        });
        this.setupDebugDraw();
        console.log("render");
    }
    private setupDebugDraw() {
        this.world.SetDebugDraw(this.debugDraw);
        this.world.DrawDebugData();
        console.log("setupDebugDraw");
    }

}
