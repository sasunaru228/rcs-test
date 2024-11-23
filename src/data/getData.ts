import axios from "axios";
import {Data} from "./dataInterface";

export default async function fetchData(idx: number): Promise<Data> {
    try {
        const res = await axios.get<Data>(`https://rcslabs.ru/ttrp${idx}.json`);
        return res.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Пробрасываем ошибку, чтобы вызывающий код мог ее обработать
    }
}