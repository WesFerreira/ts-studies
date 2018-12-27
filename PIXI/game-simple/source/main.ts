import { App } from "./App";
import { Graphics } from "./Graphics";
import { ContainerOptions } from "./_Interfaces";
import { PixiDebugBox2D } from "./PixiDebugBox2D";
import { Setup } from "./Setup";

// let mon = App.getInstance();
// let d = PixiDebugBox2D.getInstance();

let app = new Setup();

let g = new Graphics();
let ball = g.createCircle();

// app.mon.stage.addChild(ball);

// app.mon.stage.addChild(ball);

app.service.add(ball);
