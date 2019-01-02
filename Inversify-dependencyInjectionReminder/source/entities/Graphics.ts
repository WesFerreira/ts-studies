/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-28 06:58:07
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-29 19:15:13
 */

import { IGraphic, ICircle, IRectangle } from "../interfaces/IGraphic";

export class Graphics {

    public createCircle(options: ICircle): IGraphic {
        let bodyDef = new Box2D.Dynamics.b2BodyDef();
        bodyDef.type = options.dynamic;
        bodyDef.position.x = options.x / 30;
        bodyDef.position.y = options.y / 30;
        let fixtureDef = new Box2D.Dynamics.b2FixtureDef();
        fixtureDef.density = 1;
        fixtureDef.friction = 0.5;
        fixtureDef.restitution = 0.5;
        fixtureDef.shape = new Box2D.Collision.Shapes.b2CircleShape(options.r / 30);
        console.log("createCircle");
        return {
            bodyDef: bodyDef,
            fixtureDef: fixtureDef,
            force: options.force,
            mass: options.mass,
            name: options.name,
        };
    }

    public createRectangle(options: IRectangle): IGraphic {
        let bodyDef = new Box2D.Dynamics.b2BodyDef();
        bodyDef.type = options.dynamic;
        bodyDef.position.x = options.x / 30;
        bodyDef.position.y = options.y / 30;
        let fixtureDef = new Box2D.Dynamics.b2FixtureDef();
        fixtureDef.density = 1.0;
        fixtureDef.friction = 0.5;
        fixtureDef.restitution = 0.3;
        let poly = new Box2D.Collision.Shapes.b2PolygonShape();
        poly.SetAsBox(options.w / 30, options.h / 30);
        fixtureDef.shape = poly;
        console.log("createRectangle");
        return {
            bodyDef: bodyDef,
            fixtureDef: fixtureDef,
            force: options.force,
            mass: options.mass,
            name: options.name,
        };
    }

}
