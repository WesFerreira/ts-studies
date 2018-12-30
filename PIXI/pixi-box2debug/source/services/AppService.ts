/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-29 19:07:33
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-29 19:24:34
 */

import { injectable, inject } from "inversify";
import { IApps } from "../interfaces/IApps";
import IDENTFIER from "../Identifiers";

@injectable()
export class AppService {
    public debugDraw: Box2D.Dynamics.b2DebugDraw;
    private boxAppDep: IApps;

    constructor( @inject(IDENTFIER.SERVICE.APPS) boxApp: IApps) {
        this.boxAppDep = boxApp;
        this.debugDraw = this.boxAppDep.debugDraw;
        console.log("Box2App Injected");
    }
}
