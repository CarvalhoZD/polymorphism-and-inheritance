import { Animal } from "./Animal";

class Preguiça extends Animal {
    public name: string;
    public age: number;
    public mustOmitSound: string;
    public mustRun: string;

    constructor (size: number, weight: number, name: string, age: number, mustOmitSound: string, mustRun: string) {
        super(size, weight);
        this.name = name
        this.age = age
        this.mustOmitSound = mustOmitSound
        this.mustRun = mustRun
    }
}

export { Preguiça }