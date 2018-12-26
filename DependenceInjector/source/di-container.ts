import { Container } from "inversify";
import { DependencyA, DependencyB } from "./dependences";

let DIContainer = new Container();
DIContainer.bind<DependencyA>(DependencyA).toSelf();
DIContainer.bind<DependencyB>(DependencyB).toSelf();

export default DIContainer;
