/** Created by WesFerreira 24/12/18
 * Merry Christmas!
*/

import {Stage} from"./Stage";

export class Application {

    public width  = 800;
    public height = 600;

    public stage = new Stage();
    public renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    public debugView: HTMLCanvasElement;

    constructor (options: RendererOptions) {
        if (options.width) {
            this.width = options.width;
        }
        if (options.height) {
            this.height = options.width;
        }
        if (options.debugDraw) {
            this.addDebugView();
        }

        this.addPixiView(options);
    }

    private addDebugView() {
        this.debugView = document.createElement("canvas");
        this.debugView.setAttribute("id", "debugView");

        this.debugView.width = this.width;
        this.debugView.height = this.height;

        this.debugView.style.cssText =
            "background-color: rgba(255, 255, 255, 0.3); position: absolute;";

        document.body.appendChild(this.debugView);
    }

    private addPixiView(options) {
        let pixiApp = new PIXI.Application(options);
        pixiApp.view.setAttribute("id", "renderView");

        this.renderer = pixiApp.renderer;
        this.stage = pixiApp.stage;

        document.body.appendChild(pixiApp.view);
    }
}

interface RendererOptions {
    width?: number;
    height?: number;
    antialias?: boolean;
    backgroundColor?: number;
    debugDraw?: boolean;
}
