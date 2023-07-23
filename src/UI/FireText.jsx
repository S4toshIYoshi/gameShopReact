import styles from "./FireText.module.scss"
import FireIcon from "./FireIcon";

const FireText = ({fire = true, children}) => {
    return (
        <span className={styles.wrapperHeading}>
            {fire && <FireIcon />}
            <h3 className={styles.heading} style={{marginLeft: "8px"}}>{children}</h3>
        </span>
    );
}

export default FireText;