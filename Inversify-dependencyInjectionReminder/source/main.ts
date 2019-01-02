import { Mon } from "./Mon-chan";

/** Created by WesFerreira 22/12/18 */

// // Shorteners
let b2BodyDef = Box2D.Dynamics.b2BodyDef;
let b2Body = Box2D.Dynamics.b2Body;
let b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
let b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
let b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;

// let world: Box2D.Dynamics.b2World;
// 30 pixels on our canvas correspond to 1 meter in the box2d world
let scale = 30;
let b2App: Mon.Helpers.Box2App;

function createFloor() {
    // A body definition holds all the data needed to construct a rigid body
    let bodyDef = new b2BodyDef;
    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = 20 / 2 / scale;
    bodyDef.position.y = 50 / scale - 15;
    // A fixture is used to attach a shape to a body for collision detection
    // A fixture definition is used to create a fixture
    let fixtureDef = new b2FixtureDef;
    fixtureDef.density = 1.0;
    fixtureDef.friction = 0.5;
    fixtureDef.restitution = 0.2;
    let poly = new b2PolygonShape;
    poly.SetAsBox(200 / scale, 10 / scale); // 400 pixels wide and 20 pixels tall
    fixtureDef.shape = poly;
    let body = b2App.world.CreateBody(bodyDef);
    let fixture = body.CreateFixture(fixtureDef);

    let vertex = Array();
    poly.GetVertices().forEach(vert => {
        let x = vert.x * 30;
        let y = vert.y * 30;
        vertex.push(x, y);
    });
    console.log("floor");

    return {
        verices: vertex,
        x: bodyDef.position.x * 30,
        y: bodyDef.position.y * 30,
    };
}

function createCircleBody() {
    let bodyDef = new b2BodyDef;
    bodyDef.type = b2Body.b2_dynamicBody;
    bodyDef.position.x = 400 / 2 / scale;
    bodyDef.position.y = 50 / scale;
    let fixtureDef = new b2FixtureDef;
    fixtureDef.density = 1.0;
    fixtureDef.friction = 0.5;
    fixtureDef.restitution = 0.3;
    let circl = new b2CircleShape(20 / scale);
    fixtureDef.shape = circl;
    let body = b2App.world.CreateBody(bodyDef);
    let fixture = body.CreateFixture(fixtureDef);

    return {
        body: body,
        radius: circl.GetRadius() * 30,
        x: bodyDef.position.x * 30,
        y: bodyDef.position.y * 30,
    };
}
document.body.onload = function () {
    let w = 800;
    let h = 440;

    let app = new PIXI.Application({ width: w, height: h, backgroundColor: 0x777777, antialias: true });
    document.body.appendChild(app.view);
    app.view.setAttribute("id", "pixi");
    b2App = new Mon.Helpers.Box2App({ w: w, h: h, debug: true});

    let floor = createFloor();
    let circl = createCircleBody();

    let circle = new PIXI.Graphics();
    circle.beginFill(0x5cafe2);
    circle.drawCircle(0, 0, circl.radius);
    circle.x = 50;
    circle.y = 50;

    let circly = new PIXI.Graphics();
    circly.beginFill(0x000);
    circly.drawCircle(15, 0, 5);

    circle.addChild(circly);

    let circl2 = createCircleBody();

    let circle2 = new PIXI.Graphics();
    circle2.beginFill(0xfff);
    circle2.drawCircle(0, 0, circl2.radius);

    let polyy = new PIXI.Graphics();
    polyy.beginFill(0x5cafe2);
    polyy.drawPolygon(floor.verices);
    polyy.x = floor.x;
    polyy.y = floor.y;

    app.stage.addChild(polyy);
    app.stage.addChild(circle);
    app.stage.addChild(circle2);

    b2App.set.animation.timeStep(1 / 60);
    b2App.animate();

    app.ticker.add(function (delta) {
        circle.x = circl.body.GetWorldCenter().x * 30;
        circle.y = circl.body.GetWorldCenter().y * 30;
        circle.rotation = circl.body.GetAngle();

        circle2.x = circl2.body.GetWorldCenter().x * 30;
        circle2.y = circl2.body.GetWorldCenter().y * 30;
    });

};

