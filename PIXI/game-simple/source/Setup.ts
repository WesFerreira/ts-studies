/** Created by WesFerreira 26/12/18
 * Someone stop me.
 */

// import "reflect-metadata";
import { App } from "./App";
import { PixiDebugBox2D } from "./PixiDebugBox2D";
import container, { SyncService } from "./DepInjection";

export class Setup {
    public app: App;
    public d: PixiDebugBox2D;

    constructor() {
        // this.service = container.resolve<Service>(Service);
        this.app = App.getInstance();
        this.d = PixiDebugBox2D.getInstance();
        console.log("Setup");

    }
}
