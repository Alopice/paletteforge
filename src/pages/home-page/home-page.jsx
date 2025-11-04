import { RemoveScrollBar } from "react-remove-scroll-bar";
import { useImageContext } from "../../contexts/image-context";
import AppBar from "./components/app-bar";
import CodeBlock from "./components/code-block";
import ColorData from "./components/color-data";
import ImageDropper from "./components/image-dropper";
import ImageEditor from "./components/image-editor";
import { LucideDelete } from "lucide-react";

export default function HomePage(){
    const imageContext = useImageContext();
    const [imageSrc, setImageSrc] = imageContext.imageState;
    const [colors, setColors] = imageContext.colorsState;
    return(
        <>
        <RemoveScrollBar/>
        <img
        className="absolute w-screen h-screen overflow-hidden -z-10 rounded-xl" 
        src={imageSrc?imageSrc:"/starry-bg.jpg"} alt="" />

        <div className="w-screen h-screen z-1 backdrop-brightness-50 backdrop-blur-xl border-5 rounded-xl border-white/10 bg-white/10 ">
            <AppBar/>
            <div className=" md:pl-20 md:pr-20 md:pb-40 pl-5 pr-5  pt-10 w-full h-full md:overflow-hidden overflow-scroll ">
                 <section className="grid   md:grid-cols-3 md:grid-rows-1  grid-cols-1 grid-rows-3   w-full h-full gap-x-5 gap-y-10 md:mt-0 mt-5">
                {
                    imageSrc?<ImageEditor/>:<ImageDropper/>
                }
                <ColorData/>
            </section>
            </div>
           


        </div>
        </>
    );

}