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

@injectable()
export class StageService {
    private stageDep: IStage;

    public addChild(child: IGraphic) {
        this.stageDep.addChild(child);
    }
    constructor(@inject(IDENTFIER.SERVICE.STAGE) stage: IStage) {
        this.stageDep = stage;
        console.log("Stage Injected");
    }
}
