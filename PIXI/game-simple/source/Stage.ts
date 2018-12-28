/** Created by WesFerreira 24/12/18
 * Merry Christmas!
*/

import { Container } from "./Container";
import { injectable } from "inversify";

@injectable()
export class Stage extends Container {
    constructor() {
        super();
        console.log("Stage");
    }
}
