/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-28 18:05:32
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 18:45:28
 *
 * Working HARD
 */

import { injectable, inject } from "inversify";
import { IApps } from "../interfaces/IApps";

@injectable()
export class Apps implements IApps {
    public debugDraw: Box2D.Dynamics.b2DebugDraw;
    private pixiApp: PIXI.Application;

    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;


    constructor(@inject("PIXI.RendererOptions") private options: PIXI.RendererOptions,
        @inject("boolean") debug?: boolean) {
        if (debug) {
            this.addBox2DApp();
        }
        this.addPixiApp();
        console.log("Box2App");
    }

    private addBox2DApp() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.options.width;
        this.canvas.height = this.options.height;
        this.canvas.setAttribute("id", "debuggerView");
        this.canvas.style.cssText = "background-color: rgba(255, 255, 255, 0.5); position: absolute;";
        document.body.appendChild(this.canvas);

        this.context = this.canvas.getContext("2d");
        this.debugDraw = new Box2D.Dynamics.b2DebugDraw();
        this.debugDraw.SetSprite(this.context);
        this.debugDraw.SetDrawScale(30);
        this.debugDraw.SetFillAlpha(0.3);
        this.debugDraw.SetLineThickness(1.0);
        this.debugDraw.SetFlags(Box2D.Dynamics.b2DebugDraw.e_shapeBit || Box2D.Dynamics.b2DebugDraw.e_jointBit);
    }

    private addPixiApp() {
        this.pixiApp = new PIXI.Application(this.options);
        this.pixiApp.view.setAttribute("id", "rendererView");
        document.body.appendChild(this.pixiApp.view);
    }
}
