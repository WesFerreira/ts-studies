/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-25 04:11:37
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 04:12:17
 *
 *  Merry Christmas!!!
 */

 /////////////////////////////////////////////////////////////////////////////////
//                                   CLASS                                     //
/////////////////////////////////////////////////////////////////////////////////
export interface IBox2App {
    debugDraw: Box2D.Dynamics.b2DebugDraw;
    create(options: PIXI.RendererOptions): HTMLCanvasElement;
    initDebugDraw(): Box2D.Dynamics.b2DebugDraw;
}
export interface IBox2AppService {
    create(options: PIXI.RendererOptions): HTMLCanvasElement;
    initDebugDraw(): Box2D.Dynamics.b2DebugDraw;
}
///////////////////////////////////////////////////////////////////////////////////

export interface IView {
    debugDraw: Box2D.Dynamics.b2DebugDraw;
    addPixiApp(options: PIXI.RendererOptions): void;
    createBox2App(options: PIXI.RendererOptions): HTMLCanvasElement;
    initDebugDraw(): Box2D.Dynamics.b2DebugDraw;
}
export interface IViewService {
    addApps(options: PIXI.RendererOptions): void;
    initDebugDraw(): Box2D.Dynamics.b2DebugDraw;
}
///////////////////////////////////////////////////////////////////////////////////

export interface IStage {
    addChild(object: OGraphic): void;
    render(object: OGraphic[]): void;
    addApps(options: PIXI.RendererOptions): void;
    initDebugDraw(): Box2D.Dynamics.b2DebugDraw;
}
export interface IStageService {
}

 /////////////////////////////////////////////////////////////////////////////////
//                                   OBJECT                                    //
/////////////////////////////////////////////////////////////////////////////////
export interface OGraphic {
    bodyDef: Box2D.Dynamics.b2BodyDef;
    fixtureDef: Box2D.Dynamics.b2FixtureDef ;
}

