import React from "react";

const TextForCards = (props) => {

    return (
        <div>
            {(() => {

                switch (props.cardNum) {
                    case 1:
                        return (
                            <div><p>Day 1 forecast</p></div>
                        )
                    case 2:
                        return (
                            <div><p>Day 2 forecast</p></div>
                        )
                    case 3:
                        return (
                            <div><p>Day 3 forecast</p></div>
                        )
                    case 4:
                        return (
                            <div><p>Day 4 forecast</p></div>
                        )
                    case 5:
                        return (
                            <div><p>Day 5 forecast</p></div>
                        )
                    default:
                        return (
                            <div>default</div>
                        )
                }

            })()}
        </div>
    )
}

export default TextForCards;