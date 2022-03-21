import React from "react";

const TextForCards = (props) =>{
    console.log(props)
    const {daily} = props
    return(
        <span>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
            {daily.temp.night} 
        </span>
    )
}

export default TextForCards;