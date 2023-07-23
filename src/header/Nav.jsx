import Container from "../layout/Container"
import Backet from "../UI/Backet"
import Button from "../UI/Button"
import LogoIcon from "../UI/LogoIcon"
import style from "./Nav.module.scss"

const Nav = () => {
    return (
        <Container>
    <nav className={style.nav}>
        <a href="#"><LogoIcon /></a>
        <ul className={style.links}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Pages</a></li>
        </ul>
        <div className={style.rightMenu}>
            <Backet count={0}/>
            <Button typeB="light">Contact Us</Button>
        </div>
    </nav>
    </Container>
    )
}

export default Nav