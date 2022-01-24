import React, { } from "react";
import { LoadFetchGifs } from "../hooks/LoadFetchGifs";
import { CardGifItem } from "./CardGifItem";
import Loading from "../assets/loading.gif";

export let CardsItems = ({ category }) => {

    const { data: images, loading } = LoadFetchGifs(category);
    console.log(loading);

    return (
        <>
            <h4 className="text-center animate__animated animate__fadeIn">{category}</h4>
            <h5 className="text-center animate_animated animate__flash">{loading && <img className="loading" src={Loading} />}</h5>
            <ul className="row card-grid">
                {
                    images.map((img) => {
                        return <CardGifItem key={img.id} {...img} />
                    })
                }
            </ul>
        </>
    );
};