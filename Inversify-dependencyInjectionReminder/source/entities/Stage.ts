/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-28 15:12:35
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 19:01:00
 *
 *  To refactor is boring me
 */

import { injectable } from "inversify";
import { ViewService } from "../services/ViewService";
import dependencyContainer from "../config/InversionOfControl";
import { IGraphic, IMass, IForce } from "../interfaces/IGraphic";
import { IStage } from "../interfaces/IStage";
import { IForwarder } from "../interfaces/IForwarder";

@injectable()
export class Stage implements IStage, IForwarder {
    /////////// Forwards ///////////
    public pixiApp: PIXI.Application;
    public world: Box2D.Dynamics.b2World;
    ////////////////////////////////

    private gravity = new Box2D.Common.Math.b2Vec2(0, 9.8);
    private view: ViewService;

    private body: Box2D.Dynamics.b2Body;

    public forward(): void {
        this.world = new Box2D.Dynamics.b2World(this.gravity, true);
        this.pixiApp = this.view.pixiApp;
    }

    constructor() {
        this.view = dependencyContainer.resolve<ViewService>(ViewService);
        this.forward();

        console.log("Stage");
    }

    public addChild(object: IGraphic) {
        this.body = this.world.CreateBody(object.bodyDef);
        let fixture = this.body.CreateFixture(object.fixtureDef);

        if (object.mass) {
            this.applyMass(object.mass); // <MOVE>
        }
        if (object.force) {
            this.applyForce(object.force); // <MOVE>
        }

        this.logs(object);
        this.world.SetDebugDraw(this.view.debugDraw);

    }

    private applyMass(massObj: IMass) {
        let mass = new Box2D.Collision.Shapes.b2MassData();
        mass.I = massObj.i;
        mass.center = new Box2D.Common.Math.b2Vec2(massObj.center.x, massObj.center.y);
        mass.mass = massObj.mass;
        this.body.SetMassData(mass);
    }
    private applyForce(force: IForce) {
        this.body.ApplyForce(
            new Box2D.Common.Math.b2Vec2(force.fx, force.fy),
            new Box2D.Common.Math.b2Vec2(force.px, force.py),
        );
    }

    private logs(object: IGraphic) {
        console.log(object.name + " added to stage.");
        console.log(object.name + " Mass: " + this.body.GetMass());

        if (object.force) {
            console.log(
                object.name +
                " Forc: " + "fx:" + object.force.fx + " fy:" + object.force.fy +
                " px:" + object.force.px + " py:" + object.force.py);
        }
    }

    private render(graphic: IGraphic): void {
        this.world.CreateBody(graphic.bodyDef).CreateFixture(graphic.fixtureDef);
        this.world.SetDebugDraw(this.view.debugDraw);
        this.world.DrawDebugData();
        console.log("render");
    }
}
