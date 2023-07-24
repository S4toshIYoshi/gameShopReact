import { linksMenu } from "../data/links"
import Container from "../layout/Container"
import Backet from "../UI/Backet"
import Burger from "../UI/Burger"
import Button from "../UI/Button"
import LogoIcon from "../UI/LogoIcon"
import style from "./Nav.module.scss"

const Nav = () => {
    return (
        <Container>
    <nav className={style.nav}>
        <a href="#" className={style.logotip}><LogoIcon /></a>
        <ul className={style.links}>
            {linksMenu.map((el, idx) => {
                return <li key={idx}><a href={el.url}>{el.name}</a></li>
            })}
        </ul>
        <div className={style.rightMenu}>
            <Backet count={0}/>
            <Button typeB="light">Contact Us</Button>
        </div>
        <div className={style.burger}>
            <Burger links={linksMenu}/>
        </div>
    </nav>
    </Container>
    )
}

export default Nav