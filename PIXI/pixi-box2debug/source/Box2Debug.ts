/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-27 04:10:55
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 06:21:07
 *
 * ALmost new year...
 */

import dependencyContainer, { initBox2App } from "./config/InversionOfControl";
import { StageService } from "./services/StageService";

export class Box2Debug {
    public stage: StageService;

    constructor(options: PIXI.RendererOptions, debug?: boolean) {
        initBox2App(options, debug);
        this.stage = dependencyContainer.resolve<StageService>(StageService);
        console.log("App");
    }
}
