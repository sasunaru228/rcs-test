import { useState, useEffect, useRef } from "react"

export default function useElementWidth<T extends HTMLDivElement>() {
    const [width, setWidth] = useState<number>(0)
    const ref = useRef<T>(null)

    useEffect(() => {
        const updateWidth = () => {
            if (ref.current) {
                setWidth(ref.current.offsetWidth)
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth)

        return () => window.removeEventListener("resize", updateWidth)
    }, [])

    return { ref, width }
};