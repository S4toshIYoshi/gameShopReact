import style from "./UnderlineRadius.module.scss"
import line from "../images/yellowRadius.svg"

const UnderlineRadius = ({children}) => {

    return <span className={style.wrapper}>{children}<img src={line} alt="underline yellow"/></span>
}

export default UnderlineRadius