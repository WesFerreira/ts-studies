/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-28 04:15:17
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 07:00:00
 */

import { App } from "./App";
import { Graphics } from "./Graphics";

let app = new App({ width: 800, height: 440, antialias: true, backgroundColor: 0xdddddd });

let g = new Graphics();
let ball = g.createCircle(50, 50, 20);
let ball2 = g.createCircle(90, 300, 20);
app.stage.addChild(ball);
app.stage.addChild(ball2);
