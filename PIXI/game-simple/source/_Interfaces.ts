/** Created by WesFerreira 25/12/18
 * Merry Christmas!!!
*/
export interface B2dObj {
    bodyDef: Box2D.Dynamics.b2BodyDef;
    fixtureDef: Box2D.Dynamics.b2FixtureDef;
}

export interface RendererOptions {
    width?: number;
    height?: number;
    antialias?: boolean;
    backgroundColor?: number;
}

export interface ContainerOptions {
    draw: () => void;
}
