# Deendence Injector 
A reminder about how to use DI (Dependency Injection) with IoC (Inversion of Control) in TypeScript.

# Setup to an existing project
Install [Inversify](https://www.npmjs.com/package/inversify) to manage IoC.
```sh
npm install --save inversify
```
Install [reflect-metadata](https://www.npmjs.com/package/inversify) to the compiler knows what to do with `@inject` commands.
```sh
npm install --save reflect-metadata
```

In `tsconfig.json` 
```json
{
    "types": ["reflect-metadata"],
    "lib": ["es6", "dom"],
}
```
♥ Thanks for coming ♥


