export class Monster {
    constructor(
        public id: number,
        public name: string,
        public family: MonsterFamily,
        public rank: MonsterRank,
    ) {}
}
export enum MonsterFamily {
    slim
}
export enum MonsterRank {
    g,
    f,
    e,
    d,
    c,
    b,
    a,
    s
}