/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-25 04:11:37
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-29 19:11:41
 *
 *  Merry Christmas!!!
 */

export interface IBox2App {
    debugDraw: Box2D.Dynamics.b2DebugDraw;
    create(options: PIXI.RendererOptions): HTMLCanvasElement;
    initDebugDraw(): Box2D.Dynamics.b2DebugDraw;
}
