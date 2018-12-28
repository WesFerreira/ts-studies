/*
 * @Author: WesFerreira - https://github.com/WesFerreira
 * @Date: 2018-12-26 04:12:26
 * @Last Modified by: WesFerreira
 * @Last Modified time: 2018-12-28 04:14:43
 *
 * Someone stop me.
 */

import { Container } from "inversify";
import { IDebugger} from "./_Interfaces";
import { Debugger } from "./Debugger";

let DepInjector = new Container();

DepInjector.bind<IDebugger>("IDebugger").to(Debugger);

export default DepInjector;
