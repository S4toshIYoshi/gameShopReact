import styles from './Button.module.scss'

const Button = ({typeB = "origin", onClick = undefined, children}) => {
        

    return <button className={typeB == "light" ? styles.light : styles.origin} onClick={onClick}>{children}</button>;
}

export default Button;