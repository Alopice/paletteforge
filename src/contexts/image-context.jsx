import { useState, useContext, createContext } from "react";

const ImageContext = createContext();

export default function ImageContextProvider({children}){
    const [imageSrc, setImageSrc] = useState(null);
    const [colors, setColors] = useState([]);


    return <ImageContext.Provider
    value={
        {
            imageState:[imageSrc, setImageSrc],
            colorsState:[colors, setColors]
        }
    }
    >{children}</ImageContext.Provider>

}
export function useImageContext(){
    return useContext(ImageContext);
}