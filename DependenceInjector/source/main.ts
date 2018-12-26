import "reflect-metadata";
import { Service } from "./service";
import DIContainer from "./di-container";

let service: Service = DIContainer.resolve<Service>(Service);

console.log(service.getAllNames());
