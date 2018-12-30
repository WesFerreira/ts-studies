/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-26 04:12:26
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-29 19:20:06
 *
 * Someone stop me.
 */
import "reflect-metadata";

import { Container } from "inversify";
import { IStage } from "../interfaces/IStage";
import { IView } from "../interfaces/IView";
import { IApps } from "../interfaces/IApps";
import { View } from "../entities/View";
import { Stage } from "../entities/Stage";
import { Apps } from "../entities/Apps";
import IDENTFIER from "../Identifiers";

let dependencyContainer = new Container();

dependencyContainer.bind<IApps>(IDENTFIER.SERVICE.APPS).to(Apps);
dependencyContainer.bind<IView>(IDENTFIER.SERVICE.VIEW).to(View);
dependencyContainer.bind<IStage>(IDENTFIER.SERVICE.STAGE).to(Stage);

export function initBox2App(options: PIXI.RendererOptions, debug?: boolean) {
    dependencyContainer.bind<PIXI.RendererOptions>("PIXI.RendererOptions")
        .toConstantValue(options).whenInjectedInto(Apps);
    dependencyContainer.bind<boolean>("boolean")
        .toConstantValue(debug).whenInjectedInto(Apps);
}

export default dependencyContainer;
