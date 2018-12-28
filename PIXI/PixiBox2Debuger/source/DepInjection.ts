/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-26 04:12:26
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 04:14:43
 *
 * Someone stop me.
 */

import { Container } from "inversify";
import { IView, IStage} from "./_Interfaces";
import { View } from "./View";
import { Stage } from "./Stage";

let DepInjector = new Container();

DepInjector.bind<IView>("IView").to(View);
DepInjector.bind<IStage>("IStage").to(Stage);

export default DepInjector;
