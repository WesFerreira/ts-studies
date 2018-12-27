/** Created by WesFerreira 26/12/18
 * Someone stop me.
 */

import "reflect-metadata";
import { App } from "./App";
import { PixiDebugBox2D } from "./PixiDebugBox2D";
import container, { Service } from "./DepInjection";

export class Setup {
    public service: Service;

    constructor() {
        // this.service = container.resolve<Service>(Service);
        console.log("Setup");

    }
}
