/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-29 19:12:52
 * @Last Modified by:   WesFerreira
 * @Last Modified time: 2018-12-29 19:12:52
 */

export interface IView {
    debugDraw: Box2D.Dynamics.b2DebugDraw;
    addPixiApp(options: PIXI.RendererOptions): void;
    createBox2App(options: PIXI.RendererOptions): HTMLCanvasElement;
    initDebugDraw(): Box2D.Dynamics.b2DebugDraw;
}
