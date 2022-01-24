import { useState, useEffect } from "react";
import { GetGifs } from "../helpers/GetGifs";

export const LoadFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        return GetGifs(category).then(imgData => {
            setTimeout(() => {
                return setState({
                    data: imgData,
                    loading: false,
                })
            }, 2000);
        });
    }, [category]);

    return state;
};