import { linksFooterMenu, linksFooterOther } from "../data/links"
import Container from "../layout/Container"
import Description from "../UI/Description"
import FooterLinks from "../UI/FooterLinks"
import LogoIcon from "../UI/LogoIcon"
import style from "./Footer.module.scss"

const Footer = () => {
    return (
    <footer className={style.footer}>
        <Container>
            <div className={style.wrapper}>
            <div className={style.shortInformation}>
                <span width="170px" height="48px"><LogoIcon /></span>
                <Description mt={35} fsize={0.9375} boxWidth={289}>
                    Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .
                </Description>
            </div>
                <FooterLinks name="Menu Items" links={linksFooterMenu}/>
                <FooterLinks name="Other Pages" links={linksFooterOther}/>
            </div>
            
        </Container>
    </footer>
    )
}

export default Footer