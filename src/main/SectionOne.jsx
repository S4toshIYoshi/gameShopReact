import Container from "../layout/Container"
import style from "./SectionOne.module.scss"
import image from "../images/sectionOneLead.png"
import FireText from "../UI/FireText"
import Heading from "../UI/Heading"
import Description from "../UI/Description"

const SectionOne = () => {
    return (
        <section className={style.section}>
            <Container>
                <div className={style.content}>
                    <img src={image} alt="image robot" />

                    <div className={style.wrapper}>
                        <FireText>FUTURE OF eSPORTS</FireText>
                        <Heading>Customize your Own Character</Heading>
                        <Description boxWidth={561} mt={38}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</Description>

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SectionOne