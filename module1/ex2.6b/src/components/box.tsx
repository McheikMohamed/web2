import { useState } from "react";
import "./box.css"

const colors=["red","green","blue","yellow","purple"];

const Box = ()=>{
    const [currentColor,setCurrentColor] = useState(0);

    return(
        <div className="color-box"
        style={{backgroundColor:colors[currentColor]}}>
            <button onClick={()=>{
                setCurrentColor((currentColor+1)%colors.length)}}>
                    {colors[(currentColor+1)%colors.length]}
                </button>
                <h3>{colors[currentColor]}</h3>
        </div>
    )
}

export default Box