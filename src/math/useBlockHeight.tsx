import {useEffect, useState} from "react";
import React from "react";
import {Data} from "../data/dataInterface";

const useBlockHeight = (ref: React.RefObject<HTMLElement>, data: Data | null): number => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (ref.current) {
                setTimeout(() => {
                    setHeight(ref.current?.offsetHeight || 0)
                }, 0)
            }
        };

        const observer = new ResizeObserver(updateHeight);

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            observer.disconnect()
        };
    }, [ref, data])

    return height
};

export default useBlockHeight