/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-28 18:05:32
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 18:45:28
 *
 * Working HARD
 */

import { injectable } from "inversify";

@injectable()
export class Box2App {
    public debugDraw: Box2D.Dynamics.b2DebugDraw;

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    public create(options: PIXI.RendererOptions): HTMLCanvasElement {
        this.canvas = document.createElement("canvas");
        this.canvas.width = options.width;
        this.canvas.height = options.height;
        this.canvas.setAttribute("id", "debuggerView");
        this.canvas.style.cssText = "background-color: rgba(255, 255, 255, 0.5); position: absolute;";
        document.body.appendChild(this.canvas);
        return this.canvas;
    }

    public initDebugDraw(): Box2D.Dynamics.b2DebugDraw {
        this.context = this.canvas.getContext("2d");
        this.debugDraw = new Box2D.Dynamics.b2DebugDraw();
        this.debugDraw.SetSprite(this.context);
        this.debugDraw.SetDrawScale(30);
        this.debugDraw.SetFillAlpha(0.3);
        this.debugDraw.SetLineThickness(1.0);
        this.debugDraw.SetFlags(Box2D.Dynamics.b2DebugDraw.e_shapeBit || Box2D.Dynamics.b2DebugDraw.e_jointBit);
        console.log("initDebugDraw");
        return this.debugDraw;
    }

    constructor() {
        console.log("Box2App");
    }
}
