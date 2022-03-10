import React from "react";

const TextForCards = (props) =>{
    console.log(props)
    return(
        <span>
            Text From card {(typeof props.props.weather2 != "undefined") && props.props.weather2.current ? props.props.weather2.daily[2].temp.day : " error "}
        </span>
    )
}

export default TextForCards;