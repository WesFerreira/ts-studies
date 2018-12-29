export interface IType {
    name: string;
}

export interface Dependency {
    arg: IType;
    getName(): string;
}
