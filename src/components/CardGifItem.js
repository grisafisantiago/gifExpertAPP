import React from "react";

export const CardGifItem = ({ title, url }) => {

    return (
        <div className="col-6 col-sm-4 col-md-4 col-lg-6">
            <div className="card animate__animated animate__bounce mb-5">
                <img className="card-img-top" src={url} alt={title}></img>
            </div>
        </div>
    );

};