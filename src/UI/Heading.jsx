import style from "./Heading.module.scss"

const Heading = ({mt=0, h=2, boxWidth=0,children}) => {
    switch(h){
        case 2:
            return <h2 className={style.heading} style={{marginTop: `${mt}px`,
            width: `${boxWidth === 0 ? "auto" : `${boxWidth}px`}`}}>
                {children}
                </h2>;
        case 3:
            return <h3 className={style.headingH3} style={{marginTop: `${mt}px`,
            width: `${boxWidth === 0 ? "auto" : `${boxWidth}px`}`}}>
                {children}
                </h3>
        case 4:
            return <p className={style.headingDecoration} style={{marginTop: `${mt}px`,
            width: `${boxWidth === 0 ? "auto" : `${boxWidth}px`}`}}>
                {children}
                </p>
        default:
            return <p>Error</p>
    }
}

export default Heading