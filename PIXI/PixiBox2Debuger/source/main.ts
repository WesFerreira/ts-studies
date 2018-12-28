/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-28 04:15:17
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 06:29:40
 */

import { App } from "./App";

let app = new App({ width: 800, height: 440, antialias: true, backgroundColor: 0xdddddd });
let ball = app.createCircle();
app.addChild(ball);
