import ColorNamer from "color-namer";
import { useImageContext } from "../../../contexts/image-context";
import Color from "color";
import { useState } from "react";

export default function AppBar(){
    const imageContext = useImageContext();
    const [colors, setColors] = imageContext.colorsState;
    const [isToastShown, setToastShown] = useState(false);

    const handleCopy = () =>{
        const namedColors = colors.map(hex=>{
            const name = ColorNamer(hex, {pick:"ntc"}).ntc[0].name;
            const rgb = Color(hex).rgb().array();
            return {"hex":hex, "rgb":rgb, "name":name}
        })
        const newJson = {
            "colors":namedColors
        }
        navigator.clipboard.writeText(JSON.stringify(newJson));
        setToastShown(true);
        setTimeout(()=>{setToastShown(false)},1100);
    }
    
    
       
    return(
        <>
        {isToastShown && <div className="toast">
                <div className="alert alert-info">
                    <span>JSON copied!</span>
                </div>
            </div>}
        <div className="w-full p-5 flex justify-between">
            <h1 className="font-bold text-3xl text-white">PaletteForge</h1>
            <button disabled={colors.length>0?false:true} className="btn btn-neutral" onClick={()=>handleCopy()}>copy JSON</button>
        </div>
        </>
    );
}