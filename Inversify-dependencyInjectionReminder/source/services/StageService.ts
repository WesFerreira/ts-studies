/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-29 19:07:49
 * @Last Modified by:   WesFerreira
 * @Last Modified time: 2018-12-29 19:07:49
 */

import { injectable, inject } from "inversify";
import { IStage } from "../interfaces/IStage";
import IDENTFIER from "../Identifiers";
import { IGraphic } from "../interfaces/IGraphic";
import { IForwarder } from "../interfaces/IForwarder";

@injectable()
export class StageService implements IStage, IForwarder {
    /////////// Forwards ///////////
    public pixiApp: PIXI.Application;
    public world: Box2D.Dynamics.b2World;
    ////////////////////////////////

    private stageDep: IStage;

    public forward(): void {
        this.world = this.stageDep.world;
        this.pixiApp = this.stageDep.pixiApp;
    }

    constructor(@inject(IDENTFIER.SERVICE.STAGE) stage: IStage) {
        this.stageDep = stage;
        this.forward();
        console.log("Stage Injected");
    }

    public addChild(child: IGraphic) {
        this.stageDep.addChild(child);
    }
}
