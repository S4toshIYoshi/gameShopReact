import style from "./Description.module.scss"

const Description = ({fsize=1.25, mt=0, boxWidth=0, children}) => {
    return (
        <p className={style.description} 
            style={{fontSize: `${fsize}rem`,
                    marginTop: `${mt}px`,
                    width: `${boxWidth == 0 ? "auto" : `${boxWidth}px`}`}}>
            {children}
        </p>
    )
}

export default Description