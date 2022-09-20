abstract class Animal {
    public size: number;
    public weight: number;

    constructor (size: number, weight: number) {
        this.size = size;
        this.weight = weight;
    }
}

export { Animal };