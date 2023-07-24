import styles from './Button.module.scss'

const Button = ({typeB = "origin", actionHandler = undefined, children}) => {
        

    return <button className={typeB == "light" ? styles.light : styles.origin} onClick={actionHandler}>{children}</button>;
}

export default Button;