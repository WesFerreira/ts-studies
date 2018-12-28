/** Created by WesFerreira 25/12/18
 * Merry Christmas!!!
*/
import "reflect-metadata";

import { SyncViews } from "./SyncViews";
import { ContainerOptions, RendererOptions, ISyncViews } from "./_Interfaces";
import { injectable, inject } from "inversify";
import { Stage } from "./Stage";
import container, { SyncService, AppService } from "./DepInjection";

export class App {
    // tslint:disable:member-ordering
    private static instance: App;

    private gravity = new Box2D.Common.Math.b2Vec2(0, 9.8);
    public graphics: ContainerOptions[] = [];
    public sync: SyncViews;


    public world = new Box2D.Dynamics.b2World(this.gravity, true);

    public static getInstance() {
        if (!App.instance) {
            App.instance = new App();
        }
        return App.instance;
    }

    private constructor() {
        this.sync = new SyncViews({ backgroundColor: 0xcccccc, width: 800, height: 440 }, true);
        console.log("App");
    }
}
