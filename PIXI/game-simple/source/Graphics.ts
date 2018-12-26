/** Created by WesFerreira 24/12/18
 * Merry Christmas!
*/

import { Container } from "./Container";
import { DisplayObject } from "./objects/DisplayObject";

export class Graphics extends Container {
    constructor() {
        super();
    }

    public createCircle() {
        return this.createB2DCircle();
    }

    private createB2DCircle() {
        let bodyDef = new Box2D.Dynamics.b2BodyDef();
        bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
        bodyDef.position.x = 800 / 2 / 30;
        bodyDef.position.y = 50 / 30;
        let fixtureDef = new Box2D.Dynamics.b2FixtureDef();
        fixtureDef.density = 1.0;
        fixtureDef.friction = 0.5;
        fixtureDef.restitution = 0.3;
        let circl = new Box2D.Collision.Shapes.b2CircleShape(20 / 30);
        fixtureDef.shape = circl;

        return new DisplayObject({ bodyDef: bodyDef, fixtureDef: fixtureDef});
    }
}
