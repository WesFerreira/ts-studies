/** Created by WesFerreira 25/12/18
 * Merry Christmas!!!
*/
import { App } from "./App";
import { ContainerOptions } from "./_Interfaces";
import { injectable } from "inversify";

@injectable()
export class PixiDebugBox2D {

    private static instance: PixiDebugBox2D;

    public static getInstance() {
        if (!PixiDebugBox2D.instance) {
            PixiDebugBox2D.instance = new PixiDebugBox2D();
        }

        return PixiDebugBox2D.instance;
    }
    public drawAll() {
        App.getInstance().graphics.forEach(function (value: ContainerOptions) {
            value.draw();
        });
        App.getInstance().world.DrawDebugData();

    }
    public constructor() {
        console.log("PixiDebugBox2D");
    }
}
