/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-28 06:58:07
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-29 19:15:13
 */

import { IGraphic } from "../interfaces/IGraphic";

export class Graphics {
    public createCircle(x: number, y: number, r: number): IGraphic {
        let bodyDef = new Box2D.Dynamics.b2BodyDef();
        bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
        bodyDef.position.x = x / 2 / 30;
        bodyDef.position.y = y / 30;
        let fixtureDef = new Box2D.Dynamics.b2FixtureDef();
        fixtureDef.density = 1.0;
        fixtureDef.friction = 0.5;
        fixtureDef.restitution = 0.3;
        fixtureDef.shape = new Box2D.Collision.Shapes.b2CircleShape(r / 30);
        console.log("createCircle");
        return { bodyDef: bodyDef, fixtureDef: fixtureDef };
    }

}
