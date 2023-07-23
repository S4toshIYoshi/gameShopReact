import style from "./Heading.module.scss"

const Heading = ({mt=0, children}) => {

    return<h2 className={style.heading} style={{marginTop: `${mt}px`}}>{children}</h2>
}

export default Heading