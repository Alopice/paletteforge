import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { useImageContext } from "../../../contexts/image-context";
import ColorThief from "colorthief";

export default function ImageDropper() {

    const imageContext = useImageContext();
    const [imageSrc, setImageSrc] = imageContext.imageState;
    const [colors, setColors] = imageContext.colorsState;

    const onDrop = (acceptedFiles) => {
        const image = new Image();
        const file = acceptedFiles[0];
        const imageUrl = URL.createObjectURL(file);
        setImageSrc(imageUrl);
        image.crossOrigin = "Anonymous";
        image.src = imageUrl;
        image.onload = () => {
         
                    const colorThief = new ColorThief();
                    const palette = colorThief.getPalette(image, 100);
                    console.log(palette);
                    setColors(palette.map(rgb => RgbToHex(rgb[0], rgb[1], rgb[2])));
                    console.log(palette.map(rgb => RgbToHex(rgb[0], rgb[1], rgb[2])))
               
           


        };

    }

    const RgbToHex = (r, g, b) => "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");

    const { getRootProps, getInputProps, isDragActive } = useDropzone(
        {
            onDrop,
            accept: { "image/*": [] },
            multiple: false
        }
    );

    return (
        <>
            <div {...getRootProps()} className="md:col-span-2 md:row-span-3  border-4 rounded-xl border-white/10 bg-white/20">
                <input type="file"  {...getInputProps()} />
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <Upload className="text-white/40" size={60} />
                    <p className="font-semibold text-white/40">drag or click to upload image</p>
                </div>



            </div>
        </>
    );
}