/** Created by WesFerreira 25/12/18
 * Merry Christmas!!!
*/

import { SyncViews } from "./SyncViews";
import { ContainerOptions } from "./_Interfaces";

export class App extends SyncViews {
    // tslint:disable:member-ordering
    private static instance: App;

    private gravity = new Box2D.Common.Math.b2Vec2(0, 9.8);
    public graphics: ContainerOptions[] = [];

    public world = new Box2D.Dynamics.b2World(this.gravity, true);

    public static getInstance() {
        if (!App.instance) {
            App.instance = new App();
        }
        return App.instance;
    }

    private constructor() {
        super({ backgroundColor: 0xcccccc, width: 800, height: 440 }, true);
        if (this.debugDraw) {
            this.world.SetDebugDraw(this.debugDraw);
        }
    }
    // public
}
