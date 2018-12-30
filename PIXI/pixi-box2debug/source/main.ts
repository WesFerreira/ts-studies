/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-28 04:15:17
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 07:00:00
 */

import { Box2Debug } from "./Box2Debug";
import { Graphics } from "./entities/Graphics";

// tslint:disable:object-literal-sort-keys
let app = new Box2Debug({ width: 600, height: 440, antialias: true, backgroundColor: 0x4f4f4f}, true);

let g = new Graphics();
let ball = g.createCircle(50, 50, 20);
let ball2 = g.createCircle(300, 400, 20);
let ball3 = g.createCircle(700, 200, 50);
app.stage.addChild(ball);
app.stage.addChild(ball2);
app.stage.addChild(ball3);
