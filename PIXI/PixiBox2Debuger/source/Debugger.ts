import { injectable } from "inversify";
import { IDebugger } from "./_Interfaces";

/** Created by WesFerreira 27/12/18
 * ALmost new year...
*/

@injectable()
export class Debugger {
    private pixiApp: PIXI.Application;
    private box2App: HTMLCanvasElement;
    private world: Box2D.Dynamics.b2World;
    private gravity = new Box2D.Common.Math.b2Vec2(0, 9.8);
    private graphics: { bodyDef: Box2D.Dynamics.b2BodyDef, fixtureDef: Box2D.Dynamics.b2FixtureDef }[] = new Array();

    constructor(/* options: PIXI.ApplicationOptions */) {
        this.world = new Box2D.Dynamics.b2World(this.gravity, true);
        console.log("Debugger");
    }


    public addBox2App(options: PIXI.RendererOptions) {
        this.box2App = document.createElement("canvas");
        this.box2App.width = options.width;
        this.box2App.height = options.height;
        this.box2App.setAttribute("id", "debuggerView");
        this.box2App.style.cssText = "background-color: rgba(255, 255, 255, 0.5); position: absolute;";
        document.body.appendChild(this.box2App);
    }
    public addPixiApp(options: PIXI.RendererOptions) {
        this.pixiApp = new PIXI.Application(Object.assign(options, { forceCanvas: false }));
        this.pixiApp.view.setAttribute("id", "rendererView");
        document.body.appendChild(this.pixiApp.view);
    }

    public createCircle() {
        let bodyDef = new Box2D.Dynamics.b2BodyDef();
        bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
        bodyDef.position.x = 769 / 2 / 30;
        bodyDef.position.y = 50 / 30;
        let fixtureDef = new Box2D.Dynamics.b2FixtureDef();
        fixtureDef.density = 1.0;
        fixtureDef.friction = 0.5;
        fixtureDef.restitution = 0.3;
        fixtureDef.shape = new Box2D.Collision.Shapes.b2CircleShape(20 / 30);
        this.graphics.push({ bodyDef: bodyDef, fixtureDef: fixtureDef });
    }

    public renderAll() {
        let _this = this;
        this.graphics.forEach(function (circle) {
            _this.world.CreateBody(circle.bodyDef).CreateFixture(circle.fixtureDef);
            console.log("render");
        });
        this.setupDebugDraw();
    }

    private setupDebugDraw() {
        let test = <HTMLCanvasElement>document.getElementById("debugView");
        let context = this.box2App.getContext("2d");
        let debugDraw = new Box2D.Dynamics.b2DebugDraw();
        debugDraw.SetSprite(context);
        debugDraw.SetDrawScale(30);
        debugDraw.SetFillAlpha(0.3);
        debugDraw.SetLineThickness(1.0);
        debugDraw.SetFlags(Box2D.Dynamics.b2DebugDraw.e_shapeBit || Box2D.Dynamics.b2DebugDraw.e_jointBit);
        this.world.SetDebugDraw(debugDraw);
        this.world.DrawDebugData();
        console.log("show render");
    }

}
