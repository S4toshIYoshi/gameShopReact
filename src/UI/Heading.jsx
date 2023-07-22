import styles from "./Heading.module.scss"
import FireIcon from "./FireIcon";

const Heading = ({children}) => {
    return (
        <span className={styles.wrapperHeading}>
            <FireIcon />
            <h3 className={styles.heading}>{children}</h3>
        </span>
    );
}

export default Heading;