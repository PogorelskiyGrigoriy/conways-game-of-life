export default class LifeGameMatrix {
    private readonly _matrix: number[][];

    constructor(matrix: number[][]) {
        this._matrix = matrix;
    }

    get matrix() {
        return this._matrix;
    }
}