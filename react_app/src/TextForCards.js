import React from "react";

const TextForCards = (props) =>{
    const {daily} = props
    return(
        <span>
            {daily.temp.max} 
        </span>
    )
}

export default TextForCards;