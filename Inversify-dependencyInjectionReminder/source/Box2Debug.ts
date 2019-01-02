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

    private timeStep = 1 / 60;
    // As per the Box2d manual, the suggested iteration count for Box2D is 8 for velocity and 3 for position
    private velocityIterations = 8;
    private positionIterations = 3;

    constructor(options: PIXI.RendererOptions, debug?: boolean) {
        initBox2App(options, debug);
        this.stage = dependencyContainer.resolve<StageService>(StageService);
        console.log("App");
    }

    public start = () => {
        this.stage.world.Step(this.timeStep, this.velocityIterations, this.positionIterations);
        this.stage.world.ClearForces();
        this.stage.world.DrawDebugData();
        setTimeout(this.start, this.timeStep);
    }
}
