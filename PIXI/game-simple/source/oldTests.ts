/** Created by WesFerreira 22/12/18 */

// Shorteners
let b2Vec2 = Box2D.Common.Math.b2Vec2;
let b2BodyDef = Box2D.Dynamics.b2BodyDef;
let b2Body = Box2D.Dynamics.b2Body;
let b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
let b2World = Box2D.Dynamics.b2World;
let b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
let b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
let b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
let b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef;

let world: Box2D.Dynamics.b2World;
// 30 pixels on our canvas correspond to 1 meter in the box2d world
let scale = 30;

let app = new PIXI.Application({ width: 1366, height: 768, backgroundColor: 0xffffff, antialias: true });
let canvas = <HTMLCanvasElement>document.getElementById("canvas");


function createFloor() {
    // A body definition holds all the data needed to construct a rigid body
    let bodyDef = new b2BodyDef;
    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = 400 / 2 / scale;
    bodyDef.position.y = (app.renderer.view.height - 15) / scale;
    console.log(canvas.height);
    // A fixture is used to attach a shape to a body for collision detection
    // A fixture definition is used to create a fixture
    let fixtureDef = new b2FixtureDef;
    fixtureDef.density = 1.0;
    fixtureDef.friction = 0.5;
    fixtureDef.restitution = 0.2;
    let poly = new b2PolygonShape;
    poly.SetAsBox(200 / scale, 10 / scale); // 400 pixels wide and 20 pixels tall
    fixtureDef.shape = poly;
    let body = world.CreateBody(bodyDef);
    let fixture = body.CreateFixture(fixtureDef);

    let vertex = Array();
    poly.GetVertices().forEach(vert => {
        let x = vert.x * 30;
        let y = vert.y * 30;
        vertex.push(x, y);
    });
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
    let body = world.CreateBody(bodyDef);
    let fixture = body.CreateFixture(fixtureDef);

    return {
        body: body,
        radius: circl.GetRadius() * 30,
        x: bodyDef.position.x * 30,
        y: bodyDef.position.y * 30,
    };
}


function setupDebugDraw() {
    let context = (<HTMLCanvasElement>document.getElementById("canvas")).getContext("2d");
    canvas.width = canvas.width;
    canvas.height = canvas.height - 4;

    let debugDraw = new b2DebugDraw();
    // Use this canvas context for drawing the debugging screen
    debugDraw.SetSprite(context);
    // Set the scale
    debugDraw.SetDrawScale(scale);
    // Fill boxes with an alpha transparency of 0.3
    debugDraw.SetFillAlpha(0.3);
    // Draw lines with a thickness of 1
    debugDraw.SetLineThickness(1.0);
    // Display all shapes and joints
    debugDraw.SetFlags(b2DebugDraw.e_shapeBit || b2DebugDraw.e_jointBit);
    // Start using debug draw in our world
    world.SetDebugDraw(debugDraw);
}



let timeStep = 1 / 60;
// As per the Box2d manual, the suggested iteration count for Box2D is 8 for velocity and 3 for position
let velocityIterations = 8;
let positionIterations = 3;
function animate() {
    world.Step(timeStep, velocityIterations, positionIterations);
    world.ClearForces();
    world.DrawDebugData();
    setTimeout(animate, timeStep);
}

document.body.onload = function () {

    document.body.appendChild(app.view);
    app.view.setAttribute("id", "pixi");
    app.renderer.view.width = document.body.clientWidth / 1.5;
    app.renderer.view.height = document.body.clientHeight / 1.5;

    let gravity = new b2Vec2(0, 9.8); // Declare gravity as 9.8 m/s^2 downwards
    // Allow objects that are at rest to fall asleep and be excluded from calculations
    let allowSleep = true;
    world = new b2World(gravity, allowSleep);

    let floor = createFloor();
    let circl = createCircleBody();

    let circle = new PIXI.Graphics();
    circle.beginFill(0x5cafe2);
    circle.drawCircle(0, 0, circl.radius);

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

    console.log(floor.verices);

    app.stage.addChild(polyy);
    app.stage.addChild(circle);
    app.stage.addChild(circle2);

    // createFloor();
    setupDebugDraw();

    animate();


    app.ticker.add(function (delta) {
        circle.x = circl.body.GetWorldCenter().x * 30;
        circle.y = circl.body.GetWorldCenter().y * 30;
        circle.rotation = circl.body.GetAngle();

        circle2.x = circl2.body.GetWorldCenter().x * 30;
        circle2.y = circl2.body.GetWorldCenter().y * 30;
        // console.log(circl.body.GetWorldCenter());

    });

};
