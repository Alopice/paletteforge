import { Cropper } from "react-cropper";
import { useImageContext } from "../../../contexts/image-context";
import { useRef, useState } from "react";
import "cropperjs/dist/cropper.css";
import ColorThief from "colorthief";
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
    return (
        <>
            <div className=" row-span-3 col-span-2  border-4 rounded-xl border-white/10 bg-white/20 relative">
                <Cropper
                    src={imageSrc}
                    style={{ height: "100%", width: "100%", }}

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