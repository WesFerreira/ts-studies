import "reflect-metadata";
import { Service } from "./DepInjection";
import container from "./DepInjection";

export class Singleton {
    private static instance: Singleton;

    public service: Service;

    public static getInstance() {
        if (!this.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public names() {
        return this.service.getAllNames();
    }

    private constructor() {
        this.service = container.resolve<Service>(Service);
        console.log("App");
    }
}