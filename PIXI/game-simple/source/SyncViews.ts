/** Created by WesFerreira 24/12/18
 * Merry Christmas!
*/
import "reflect-metadata";

import { Stage } from "./Stage";
import { RendererOptions, ISyncViews } from "./_Interfaces";
import { App } from "./App";
import { injectable } from "inversify";
import container, { SyncService } from "./DepInjection";

@injectable()
export class SyncViews {

    public debugDraw: Box2D.Dynamics.b2DebugDraw;
    public stage;
    public renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    public debugView: HTMLCanvasElement;
    public service: SyncService;

    private width = 800;
    private height = 600;

    constructor(options?: RendererOptions, debugDraw?: boolean) {
        this.service = container.resolve<SyncService>(SyncService);

        if (options) {
            if (options.width) {
                this.width = options.width;
            }
            if (options.height) {
                this.height = options.width;
            }
            if (debugDraw) {
                this.debugView = this.addDebugView(options);
                this.debugDraw = this.setupDebugDraw();
            }
        }
        this.addPixiView(options);

        console.log("Sync");
    }

    private addDebugView(options: RendererOptions): HTMLCanvasElement {
        let debugV = document.createElement("canvas");
        debugV.width = options.width;
        debugV.height = options.height;
        debugV.setAttribute("id", "debugView");

        debugV.style.cssText =
            "background-color: rgba(255, 255, 255, 0.5); position: absolute;";

        document.body.appendChild(debugV);
        return debugV;
    }

    private addPixiView(options: RendererOptions) {
        let pixiApp = new PIXI.Application(options);
        pixiApp.view.setAttribute("id", "renderView");

        this.renderer = pixiApp.renderer;

        document.body.appendChild(pixiApp.view);
    }

    private setupDebugDraw() {
        let context = (<HTMLCanvasElement>document.getElementById("debugView")).getContext("2d");
        let debugDraw = new Box2D.Dynamics.b2DebugDraw();
        debugDraw.SetSprite(context);
        debugDraw.SetDrawScale(30);
        debugDraw.SetFillAlpha(0.3);
        debugDraw.SetLineThickness(1.0);
        debugDraw.SetFlags(Box2D.Dynamics.b2DebugDraw.e_shapeBit || Box2D.Dynamics.b2DebugDraw.e_jointBit);
        return debugDraw;
    }
}

