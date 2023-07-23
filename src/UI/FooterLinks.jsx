import style from "./FooterLinks.module.scss"

const FooterLinks = ({name, links}) => {
    return (
        
        <ul className={style.boxLinks}>
            <h4>{name}</h4>
            {links.map((el, idx) => {
                return (
                <li key={idx}>
                    <a href={el.url}>{el.name}</a>
                </li>
                )
            })}
        </ul>
    )
}

export default FooterLinks