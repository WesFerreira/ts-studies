/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-28 04:15:17
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 07:00:00
 */

import { Graphics } from "./entities/Graphics";
import { Box2Debug } from "./Box2Debug";

// tslint:disable:object-literal-sort-keys
let app = new Box2Debug({ width: window.innerWidth, height: 440, antialias: true, backgroundColor: 0x4f4f4f }, true);

let g = new Graphics();
let ball = g.createRectangle({ x: 20, y: 200, w: 20, h: 200, dynamic: 0 });

let ball2 = g.createCircle(
    {
        name: "Ball",
        x: 750, y: 50, r: 50, dynamic: 2,
    });

let floor = g.createRectangle({ x: 683, y: 420, w: 683, h: 20, dynamic: 0});
app.stage.addChild(ball);
app.stage.addChild(ball2);
app.stage.addChild(floor);

app.start();

let i = document.addEventListener("keydown", (event) => {
    const keyName = event.key;

    if (keyName === "Control") {
        app.stage.addChild(ball2);
        return;
    }
}, false);
