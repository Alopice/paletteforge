import { CopyBlock, dracula } from "react-code-blocks";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function CodeBlock(){
    return(
        <>
        <div className="row-span-2 col-span-1 pt-10 pb-10 pl-20">
            <div className="flex-col w-full h-full">
                
                    <div className="btn btn-neutral rounded-none ">tailwindcss</div>
                    <div className="btn btn-neutral rounded-none">css</div>


                    <div className="mockup-code h-full w-full rounded-t-none">
                       <div className="h-full w-full overflow-scroll scrollbar-hide pb-10">
                            <pre data-prefix="1"><code>dada</code></pre>
                        <pre data-prefix="1"><code>dada</code></pre>
                        <pre data-prefix="1"><code>dada</code></pre>
                        <pre data-prefix="1"><code>dada</code></pre>
                        <pre data-prefix="1"><code>dada</code></pre>
                        <pre data-prefix="1"><code>dada</code></pre>
                        <pre data-prefix="1"><code>dada</code></pre>
                        <pre data-prefix="1"><code>dada</code></pre>
                        <pre data-prefix="1"><code>dada</code></pre>
                        <pre data-prefix="1"><code>dada</code></pre>
                        <pre data-prefix="1"><code>dada</code></pre>
                       </div>
                        
                       
                    </div>
                
                
            </div>
            
        </div>
        </>
    );
}