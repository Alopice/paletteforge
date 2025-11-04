import { Cropper } from "react-cropper";
import { useImageContext } from "../../../contexts/image-context";
import { useRef, useState } from "react";
import "cropperjs/dist/cropper.css";
import ColorThief from "colorthief";
import { GrClearOption } from "react-icons/gr";
import { FaRemoveFormat } from "react-icons/fa";
import { FcRemoveImage } from "react-icons/fc";
import { BiReset } from "react-icons/bi";
export default function ImageEditor() {


    const imageContext = useImageContext();
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [imageSrc, setImageSrc] = imageContext.imageState;
    const [colors, setColors] = imageContext.colorsState;
    const cropperRef = useRef();
    const onCrop = () => {

        const cropper = cropperRef.current?.cropper;
        if (!cropper) return;
        const croppedCanvas = cropper.getCroppedCanvas();
        if (!croppedCanvas || croppedCanvas.width === 0 || croppedCanvas.height === 0) return;

        const croppedImage = new Image();
        croppedImage.crossOrigin = "Anonymous";
        croppedImage.src = cropper.getCroppedCanvas().toDataURL();
        
        croppedImage.onload = () => {

            const colorThief = new ColorThief();
            const palette = colorThief.getPalette(croppedImage, 100);
            setColors(palette.map(rgb => RgbToHex(rgb[0], rgb[1], rgb[2])));

        };
    }
    const RgbToHex = (r, g, b) => "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");

    const onClearImage = () => {
        setImageSrc(null);
        setColors([]);
    }

    return (
        <>
            <div className=" md:col-span-2  border-4  border-white/10 bg-white/20 relative">

                <BiReset className="hover:text-white/20  btn btn-primary w-fit bg-transparent border-none shadow-none absolute right-0 -top-[20%] text-white/50" size={30} onClick={()=>onClearImage()}/>

                <Cropper
                    src={imageSrc}
                    style={{ height: "100%", width: "100%"}}

                    guides={false}
                    viewMode={1}
                    responsive={true}
                    background={false}
                    autoCropArea={1}
                    ref={cropperRef}
                    cropend={onCrop}
                    
                />
            </div>

        </>
    );
}
//className="w-full h-full object-cover rounded-xl"