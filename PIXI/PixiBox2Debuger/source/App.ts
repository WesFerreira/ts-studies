/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-27 04:10:55
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 06:21:07
 *
 * ALmost new year...
 */

import "reflect-metadata";

import DepInjector from "./DepInjection";
import { OGraphic, IDebuggerService } from "./_Interfaces";
import { DebuggerService } from "./Services";

export class App implements IDebuggerService {
    private service: DebuggerService;
    private toRender: OGraphic[] = new Array();

    constructor(options: PIXI.ApplicationOptions) {
        this.service = DepInjector.resolve<DebuggerService>(DebuggerService);
        this.service.addApps(options);
        console.log("App");
    }

    public addChild(child: OGraphic) {
        this.toRender.push(this.service.addChild(child));
        this.service.renderAll(this.toRender);
        return child;
    }

}
