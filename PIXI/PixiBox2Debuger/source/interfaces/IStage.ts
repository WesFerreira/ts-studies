/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-29 19:12:40
 * @Last Modified by:   WesFerreira
 * @Last Modified time: 2018-12-29 19:12:40
 */

import { IGraphic } from "./IGraphic";

export interface IStage {
    addChild(object: IGraphic): void;
    render(object: IGraphic[]): void;
    addApps(options: PIXI.RendererOptions): void;
    initDebugDraw(): Box2D.Dynamics.b2DebugDraw;
}
