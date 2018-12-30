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
import { IBox2App } from "../interfaces/IBox2App";
import { View } from "../entities/View";
import { Stage } from "../entities/Stage";
import { Box2App } from "../entities/Box2App";
import IDENTFIER from "../Identifiers";

let dependencyContainer = new Container();

dependencyContainer.bind<IView>(IDENTFIER.SERVICE.VIEW).to(View);
dependencyContainer.bind<IStage>(IDENTFIER.SERVICE.STAGE).to(Stage);
dependencyContainer.bind<IBox2App>(IDENTFIER.SERVICE.BOX2APP).to(Box2App);

export default dependencyContainer;
