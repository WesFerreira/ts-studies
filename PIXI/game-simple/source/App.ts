/** Created by WesFerreira 25/12/18
 * Merry Christmas!!!
*/

import { SyncViews } from "./SyncViews";
import { ContainerOptions, RendererOptions } from "./_Interfaces";
import { injectable } from "inversify";
import { Stage } from "./Stage";

@injectable()
export class App {
    // tslint:disable:member-ordering
    private static instance: App;

    private gravity = new Box2D.Common.Math.b2Vec2(0, 9.8);
    public graphics: ContainerOptions[] = [];
    public sync: SyncViews;

    public world = new Box2D.Dynamics.b2World(this.gravity, true);

    public static getInstance() {
        if (!App.instance) {
            App.instance = new App({ backgroundColor: 0xcccccc, width: 800, height: 440 }, true);
        }
        return App.instance;
    }

    public constructor(options?: RendererOptions, debugDraw?: boolean) {
        this.sync = new SyncViews(options, debugDraw);
        console.log("App");
    }
}
