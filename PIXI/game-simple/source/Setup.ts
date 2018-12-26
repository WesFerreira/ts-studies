/** Created by WesFerreira 26/12/18
 * Someone stop me.
 */

import { App } from "./App";
import { PixiDebugBox2D } from "./PixiDebugBox2D";

export class Setup {
    public mon: App;
    public d: PixiDebugBox2D;

    constructor(mon, d) {
        this.mon = mon;
        this.d = d;
    }
}
