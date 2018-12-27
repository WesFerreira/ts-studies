/** Created by WesFerreira 26/12/18
 * Someone stop me.
 */

import { inject, injectable } from "inversify";
import { Container } from "inversify";
import { App } from "./App";
import { PixiDebugBox2D } from "./PixiDebugBox2D";
import { Stage } from "./Stage";
import { SyncViews } from "./SyncViews";
import { RendererOptions, ISyncViews } from "./_Interfaces";


@injectable()
export class SyncService {
    protected stageDep: Stage;

    public getStage() {
        return this.stageDep;
    }

    /* public add(child) {
        this.stageDep.addChild(child);
    } */

    constructor(@inject(Stage) stageDep: Stage) {
        this.stageDep = stageDep;
        console.log("SyncService");
    }
}

@injectable()
export class AppService implements ISyncViews {

    public debugDraw: Box2D.Dynamics.b2DebugDraw;
    public stage;
    public renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    public debugView: HTMLCanvasElement;
    public service: SyncService;

    protected syncDep: ISyncViews;

    public getStage() {
        return this.syncDep.service.getStage();
    }

    constructor(@inject("ISyncViews") syncDep: ISyncViews) {
        this.syncDep = syncDep;
        console.log("AppService");
    }
}

let container = new Container();
// container.bind<App>(App).toSelf();
// container.bind<PixiDebugBox2D>(PixiDebugBox2D).toSelf();

container.bind<Stage>(Stage).toSelf();
container.bind<ISyncViews>("SyncViews").to(SyncViews);

const a = container.get<ISyncViews>("SyncViews");
// a.

export default container;
