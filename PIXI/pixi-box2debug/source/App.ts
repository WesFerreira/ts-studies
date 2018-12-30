/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-27 04:10:55
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 06:21:07
 *
 * ALmost new year...
 */

import dependencyContainer from "./config/InversionOfControl";
import { StageService } from "./services/StageService";

export class App {
    public stage: StageService;

    constructor(options: PIXI.ApplicationOptions) {
        this.stage = dependencyContainer.resolve<StageService>(StageService);
        this.stage.addApps(options);
        console.log("App");
    }
}
