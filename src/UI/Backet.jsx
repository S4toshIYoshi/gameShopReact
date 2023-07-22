import BacketIcon from "./BacketIcon";
import style from "./Backet.module.scss"

const Backet = ({count}) => {
    return (
        <button className={style.wrapper}>
            <span className={style.counter}>{count}</span>
            <BacketIcon/>
        </button>
    );
}

export default Backet