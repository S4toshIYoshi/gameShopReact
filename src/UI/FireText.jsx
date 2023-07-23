import styles from "./FireText.module.scss"
import FireIcon from "./FireIcon";

const FireText = ({children}) => {
    return (
        <span className={styles.wrapperHeading}>
            <FireIcon />
            <h3 className={styles.heading}>{children}</h3>
        </span>
    );
}

export default FireText;