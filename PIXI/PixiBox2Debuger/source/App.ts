import "reflect-metadata";

import { Debugger } from "./Debugger";
import { injectable } from "inversify";
import container, { DebuggerService } from "./DepInjection";

/** Created by WesFerreira 27/12/18
 * ALmost new year...
*/

export class App {
    private service: DebuggerService;

    constructor(options: PIXI.ApplicationOptions) {
        this.service = container.resolve<DebuggerService>(DebuggerService);
        this.service.addApps(options);
        // this.service.setupDebug();
        console.log("App");
    }

    public createCircle() {
        return this.service.create();
    }

    public addChild() {
        this.service.render();

    }

}
