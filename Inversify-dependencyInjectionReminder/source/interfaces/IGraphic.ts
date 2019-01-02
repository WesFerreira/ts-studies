/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-29 19:13:07
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-29 19:14:00
 */
// <IMPROVE>
export interface IGraphic {
    bodyDef: Box2D.Dynamics.b2BodyDef;
    fixtureDef: Box2D.Dynamics.b2FixtureDef;
    name?: string;
    force?: IForce;
    mass?: IMass;
}

export interface ICircle {
    x: number;
    y: number;
    r: number;
    dynamic: number;
    name?: string;
    force?: IForce;
    mass?: IMass;
}

export interface IRectangle {
    x: number;
    y: number;
    w: number;
    h: number;
    dynamic: number;
    name?: string;
    force?: IForce;
    mass?: IMass;
}

export interface IForce {
    fx: number;
    fy: number;
    px: number;
    py: number;
}

export interface IMass {
    center: {
        x: number;
        y: number;
    };
    i: number;
    mass: number;
}
