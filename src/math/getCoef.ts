import {Data} from "../data/dataInterface";

const MAX_HEIGHT = 260
// 260px

export default function getCoef (data: Data): number {
    const dev = data.dev
    const prod = data.prod
    const test = data.test
    const norm = data.norm
    const maxOfColums = Math.max(
        dev.back + dev.db + dev.front,
        prod.back + prod.db + prod.front,
        test.back + test.db + test.front,
        norm,
    )
    if (maxOfColums === 0) return 0
    if (MAX_HEIGHT / maxOfColums < 1) return MAX_HEIGHT / maxOfColums
    const coef = Math.round((MAX_HEIGHT / maxOfColums) * 10000) / 10000
    return coef
}