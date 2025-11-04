import { useState } from "react";
import { useImageContext } from "../../../contexts/image-context";

export default function ColorData(){
    const imageContext = useImageContext();
    const [colors, setColors] = imageContext.colorsState;
    const [isToastShown, setToastShown] = useState(false);

    const handleColorClick = (hex) => {
        navigator.clipboard.writeText(hex);
        setToastShown(true);
        setTimeout(()=>{setToastShown(false)},1100);
    };

    return(
        <>
            {isToastShown && <div className="toast">
                <div className="alert alert-info">
                    <span>Hex code copied!</span>
                </div>
            </div>}
            <div className=" col-span-1 p-1   md:overflow-auto  ">
                <section className="grid grid-cols-2 w-full  gap-2">
                    {
                        colors.map((hex,index)=>{
                            return(
                                <div key={index} className="w-full h-20 flex flex-col justify-end items-start p-1 btn btn-primary  border-none shadow-none"
                                onClick={()=>handleColorClick(hex)}    
                                style={
                                        {
                                            backgroundColor:hex,
                                            
                                        }
                                    }
                                >

                                <p>{hex}</p>
                                </div>
                            );
                        })
                    }
                </section>
            </div>
        </>
    );
}