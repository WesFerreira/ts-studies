/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-27 04:10:55
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 06:21:07
 *
 * ALmost new year...
 */

import DepInjector from "./DepInjection";
import { OGraphic, IViewService, IStageService } from "./_Interfaces";
import { ViewService, StageService } from "./Services";

export class App implements IStageService {
    public stage: StageService;

    constructor(options: PIXI.ApplicationOptions) {
        this.stage = DepInjector.resolve<StageService>(StageService);
        this.stage.addApps(options);
        console.log("App");
    }
}
