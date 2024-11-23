export interface Data {
    title: string,
    norm: number,
    dev: {
        front: number,
        back: number,
        db: number
    },
    prod: {
        front: number,
        back: number,
        db: number
    },
    test: {
        front: number,
        back: number,
        db: number
    },
}