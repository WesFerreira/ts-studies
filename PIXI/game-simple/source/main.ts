import { App } from "./App";
import { Graphics } from "./Graphics";
import { ContainerOptions } from "./_Interfaces";
import { PixiDebugBox2D } from "./PixiDebugBox2D";

let mon = App.getInstance();
let d = PixiDebugBox2D.getInstance();

let g = new Graphics();
let ball = g.createCircle();

mon.stage.addChild(ball);
