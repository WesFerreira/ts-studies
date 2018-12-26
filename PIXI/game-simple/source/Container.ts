/** Created by WesFerreira 24/12/18
 * Merry Christmas!
*/
import { DisplayObject } from "./objects/DisplayObject";
import { App } from "./App";
import { ContainerOptions } from "./_Interfaces";
import { PixiDebugBox2D } from "./PixiDebugBox2D";

export class Container {
    public addChild<T extends DisplayObject>(child: T): void {
        App.getInstance().graphics.push({
            draw: () => {
                App.getInstance().world.CreateBody(child.b2dObj.bodyDef).CreateFixture(child.b2dObj.fixtureDef);
            },
        });
        PixiDebugBox2D.getInstance().drawAll();
    }
}
