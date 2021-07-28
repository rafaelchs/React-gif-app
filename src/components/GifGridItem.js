import React from "react";

const GifGridItem = ({img}) =>{

    return(
        <div className="card animate__backInDown animate__delay-4s">
            <img src={img.url} alt={img.title}/>
            <p>{img.title}</p>
            

        </div>
    )
}

export default GifGridItem;