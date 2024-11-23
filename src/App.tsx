import React, {useEffect, useState, useRef} from 'react'
import classes from './App.module.css'
import getData from "./data/getData";
import getCoef from "./math/getCoef";
import {Data} from "./data/dataInterface";
import Graf from "./Components/Graf";
import useElementWidth from "./math/useElementWidth";
import useBlockHeight from "./math/useBlockHeight";
import Buttons from "./Components/Buttons";
import Footer from "./Components/Footer";
import DiffBlock from "./Components/DiffBlock";
import LineHorizontal from "./Components/LineHorizontal";
import LineVertical from "./Components/LineVertical";
import Header from "./Components/Header";

function App() {
    const [state, setState] = useState<number>(1) // состояние данных для загрузки разных json
    const [data, setData] = useState<Data | null>(null) // стейт с данными загруженными через axios
    const [coef, setCoef] = useState<number>(1) // коэффициент для вычисления высоты графов

    const block1Ref = useRef<HTMLDivElement>(null)
    const block2Ref = useRef<HTMLDivElement>(null)
    const block3Ref = useRef<HTMLDivElement>(null)

    const block1Height = useBlockHeight(block1Ref, data)
    const block2Height = useBlockHeight(block2Ref, data)
    const block3Height = useBlockHeight(block3Ref, data)

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData(state)
            setData(result)
        };
        fetchData()
    }, [state])

    useEffect(() => {
        if (data) setCoef(getCoef(data))
    }, [data])

    const {ref, width} = useElementWidth<HTMLDivElement>() // нахождение ширины родителя
    const columnWidth: number = (width - 320 - 40) / 8 // вычисление ширины колонки между графами
    const firstWidth = columnWidth * 2 + 80 + 20 // вычисление середины между 1 и 2 графами
    const secondWidth = columnWidth * 4 + 160 + 20 // вычисление середины между 2 и 3 графами
    let firstDiff: number = 0 // разница между 1 и 2 графом
    let secondDiff: number = 0 // разница между 2 и 3 графом
    if (data) {
        firstDiff = (data.test.db + data.test.front + data.test.back) - (data.dev.db + data.dev.front + data.dev.back)
        secondDiff = (data.prod.db + data.prod.front + data.prod.back) - (data.test.db + data.test.front + data.test.back)
    }

    return (
        <div className={classes.app}>
            <Buttons onClick={setState}/>
            <div ref={ref} style={{position: "relative"}} className={classes.view}>

                <LineHorizontal
                    left={columnWidth + 60}
                    width={columnWidth * 2 + 40 + 30}
                />
                <LineHorizontal
                    left={columnWidth * 3 + 80 + 20 + 50}
                    width={columnWidth * 2 + 40 + 30}
                />

                <LineVertical
                    left={columnWidth + 20 + 40}
                    height={336 - block1Height - 9}
                    arrow={false}
                />
                <LineVertical
                    left={columnWidth * 3 + 80 + 20 + 30}
                    height={336 - block2Height - 9}
                    arrow={true}
                />
                <LineVertical
                    left={columnWidth * 3 + 80 + 20 + 50}
                    height={336 - block2Height - 9}
                    arrow={false}
                />
                <LineVertical
                    left={columnWidth * 5 + 80 + 80 + 20 + 40}
                    height={336 - block3Height - 9}
                    arrow={true}
                />
                <DiffBlock
                    width={width}
                    marginLeft={firstWidth}
                    diff={firstDiff}
                />
                <DiffBlock
                    width={width}
                    marginLeft={secondWidth}
                    diff={secondDiff}
                />
                {data && <Header title={data.title}/>}
                <div className={classes.view_data}>
                    <div className={classes.view_data_info}>
                        <div className={classes.view_data_info_column}>
                            {data
                                ? <Graf
                                    front={data.dev.front}
                                    back={data.dev.back}
                                    db={data.dev.db}
                                    coef={coef}
                                    ref={block1Ref}
                                />
                                : null
                            }
                            <span>dev</span>
                        </div>
                        <div className={classes.view_data_info_column}>
                            {data
                                ? <Graf
                                    front={data.test.front}
                                    back={data.test.back}
                                    db={data.test.db}
                                    coef={coef}
                                    ref={block2Ref}
                                />
                                : null
                            }
                            <span>test</span>
                        </div>
                        <div className={classes.view_data_info_column}>
                            {data
                                ? <Graf
                                    front={data.prod.front}
                                    back={data.prod.back}
                                    db={data.prod.db}
                                    coef={coef}
                                    ref={block3Ref}
                                />
                                : null
                            }
                            <span>prod</span>
                        </div>
                        <div className={classes.view_data_info_column}>
                            {data
                                ? <div style={{height: coef === 0 ? 50 : coef * data.norm}}
                                       className={classes.view_data_info_column_graf_norm}><span
                                    className={classes.view_data_info_column_graf_norm_text}>{data.norm}</span></div>
                                : null
                            }
                            <span>норматив</span>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
