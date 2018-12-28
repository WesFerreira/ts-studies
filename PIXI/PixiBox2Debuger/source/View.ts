/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-27 04:09:30
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 16:29:15
 *
 * * ALmost new year...
 */
import "reflect-metadata";

import { injectable } from "inversify";
import { OGraphic, IView } from "./_Interfaces";

@injectable()
export class View implements IView {
    public debugDraw: Box2D.Dynamics.b2DebugDraw;

    private pixiApp: PIXI.Application;
    private box2App: HTMLCanvasElement;

    private context: CanvasRenderingContext2D;

    constructor() {
        console.log("View");
    }
    /* public addApps(options: PIXI.RendererOptions) {
        this.addBox2App(options);
        this.addPixiApp(options);
    } */

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
        console.log("addBox2App");

    }
    public addPixiApp(options: PIXI.RendererOptions) {
        this.pixiApp = new PIXI.Application(options);
        this.pixiApp.view.setAttribute("id", "rendererView");
        document.body.appendChild(this.pixiApp.view);
        console.log("addPixiApp");

    }
}
