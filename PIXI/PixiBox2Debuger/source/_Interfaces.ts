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
export interface IView {
    debugDraw: Box2D.Dynamics.b2DebugDraw;
    addBox2App(options: PIXI.RendererOptions): void;
    addPixiApp(options: PIXI.RendererOptions): void;
}
export interface IViewService {
    addApps(options: PIXI.RendererOptions): void;
}
///////////////////////////////////////////////////////////////////////////////////

export interface IStage {
    addChild(object: OGraphic): void;
    render(object: OGraphic[]): void;
    addApps(options: PIXI.RendererOptions): void;
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

