/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-26 04:12:26
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 04:14:43
 *
 * Someone stop me.
 */

import { Container } from "inversify";
import { IView, IStage, IBox2App} from "./_Interfaces";
import { View } from "./View";
import { Stage } from "./Stage";
import { Box2App } from "./Box2App";

let DepInjector = new Container();

DepInjector.bind<IView>("IView").to(View);
DepInjector.bind<IStage>("IStage").to(Stage);
DepInjector.bind<IBox2App>("IBox2App").to(Box2App);

export default DepInjector;
