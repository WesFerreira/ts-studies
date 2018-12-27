
import { App } from "./App";
import { SyncViews } from "./SyncViews";
import { Graphics } from "./Graphics";
import { ContainerOptions, ISyncViews } from "./_Interfaces";
import { PixiDebugBox2D } from "./PixiDebugBox2D";
import { Setup } from "./Setup";
import { Stage } from "./Stage";
import container from "./DepInjection";

// let mon = App.getInstance();
// let d = PixiDebugBox2D.getInstance();

// let app = new Setup();

let sync = new SyncViews({ backgroundColor: 0xcccccc, width: 800, height: 440 }, true);

    // let app = App.getInstance();
/*
let a = container.get<ISyncViews>("ISyncViews");
console.log(a); */
let g = new Graphics();
let ball = g.createCircle();

// app.mon.stage.addChild(ball);

// app.mon.stage.addChild(ball);

// app.service.add(ball);
