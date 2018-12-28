/** Created by WesFerreira 25/12/18
 * Merry Christmas!!!
 */

import { B2dObj } from "../_Interfaces";

export class DisplayObject {
    public b2dObj: B2dObj;

    constructor(b2dObj: B2dObj) {
        this.b2dObj = b2dObj;
        console.log("DisplayOBJ");
    }
}
