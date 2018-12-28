/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-25 04:11:37
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 04:12:17
 *
 *  Merry Christmas!!!
 */

 ////////////////////////// CLASS
export interface IDebugger {
    addBox2App(options: PIXI.RendererOptions): void;
    addPixiApp(options: PIXI.RendererOptions): void;
    //
    add(object: OGraphic): OGraphic;
    createCircle(): OGraphic;
    renderAll(object: OGraphic[]): void;
}

export interface IDebuggerService {
    createCircle(): OGraphic;
    addChild(child: OGraphic): OGraphic;
}

 ////////////////////////// OBJECT
export interface OGraphic {
    bodyDef: Box2D.Dynamics.b2BodyDef;
    fixtureDef: Box2D.Dynamics.b2FixtureDef ;
}

