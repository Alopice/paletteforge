import { RemoveScrollBar } from "react-remove-scroll-bar";
import { useImageContext } from "../../contexts/image-context";
import AppBar from "./components/app-bar";
import CodeBlock from "./components/code-block";
import ColorData from "./components/color-data";
import ImageDropper from "./components/image-dropper";
import ImageEditor from "./components/image-editor";

export default function HomePage(){
    const imageContext = useImageContext();
    const [imageSrc, setImageSrc] = imageContext.imageState;
    return(
        <>
        <RemoveScrollBar/>
        <img
        className="absolute w-screen h-screen overflow-hidden -z-10" 
        src={imageSrc?imageSrc:"/starry-bg.jpg"} alt="" />

        <div className="w-screen h-screen z-1 backdrop-brightness-50 backdrop-blur-xl border-5 rounded-xl border-white/10 bg-white/10 ">
            <AppBar/>
            <div className=" pl-20 pr-20 pb-40 pt-10 w-full h-full">
                 <section className="grid grid-cols-3 grid-rows-3 w-full h-full gap-x-5 gap-y-10">
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