import Button from "../UI/Button"
import Callbeck from "../UI/Callbeck"
import FireText from "../UI/FireText"
import Heading from "../UI/Heading"
import style from "./Header.module.scss"
import image from "../images/headerLead.png"
import UnderlineRadius from "../UI/UnderlineRadius"
import Container from "../layout/Container"
import Description from "../UI/Description"

const Header = () => {
    return (
    <Container>
        <header className={style.header}>
            <div className={style.leftBlock}>
                <FireText>FUTURE OF eSPORTS</FireText>
                <Heading mt={24}>Unleash the Next <UnderlineRadius>Generation</UnderlineRadius> of Gaming</Heading>
                <Description fsize={1.125} boxWidth={615} mt={45}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</Description>
                <div className={style.wrapperButton}>
                    <Button>Explore More</Button>
                    <p className={style.buttonDescription}>View our team</p>
                </div>
            </div>
            <Callbeck />
            <div className={style.rightBlock}>
            </div>
        </header>
    </Container>    
    )
}

export default Header