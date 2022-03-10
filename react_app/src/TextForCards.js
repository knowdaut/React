import React from "react";

const TextForCards = (props) =>{
    console.log(props)
    const {daily} = props
    return(
        <span>
            {daily.temp.night} 
        </span>
    )
}

export default TextForCards;