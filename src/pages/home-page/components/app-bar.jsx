import ColorNamer from "color-namer";
import { useImageContext } from "../../../contexts/image-context";
import Color from "color";

export default function AppBar(){
    const imageContext = useImageContext();
    const [colors, setColors] = imageContext.colorsState;

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
    }
    return(
        <>
        <div className="w-full p-5 flex justify-between">
            feafa
            <button className="btn btn-primary" onClick={()=>handleCopy()}>copy JSON</button>
        </div>
        </>
    );
}