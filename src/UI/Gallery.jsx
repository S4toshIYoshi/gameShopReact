import style from "./Gallery.module.scss"
import { useState } from "react";

const Gallery = ({mt=0, images}) => {
    const [idxImage, setIdxImage] = useState(-1)
    let interval = setInterval(()=>setIdxImage(idxImage+1), 3000)
    if(idxImage > 2){
        setIdxImage(0)
    }
    return (
        <div className={style.gallery} style={{marginTop: `${mt}px`}}>
            {images.map((el, idx) => {
                return (
                    <div className={idx == idxImage ? `${style.choice} ${style.active}` : style.choice}>
                        <img key={idx} src={el.url} alt={`gallery image ${el.name} ${idx+1}`}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery