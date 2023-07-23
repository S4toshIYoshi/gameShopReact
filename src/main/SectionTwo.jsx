import Container from "../layout/Container"
import Button from "../UI/Button"
import FireText from "../UI/FireText"
import Heading from "../UI/Heading"
import style from "./SectionTwo.module.scss"
import { imageNews } from "../data/newsObj.js"
import NewsCard from "../UI/NewsCard"

const SectionTwo = () => {
    return (
        <section className={style.section}>
            <Container>
                <FireText>FUTURE OF eSPORTS</FireText>
                <div className={style.wrapper}>
                    <Heading>Latest News & <br />Articles</Heading>
                    <Button>Read More</Button>
                </div>
                <div className={style.wrapperNews}>
                    {imageNews.map((el, idx) => {
                        return <NewsCard key={idx} size={el.size} headline={el.heading} date={el.data} image={el.url} imageAlt={el.heading} idx={idx}/>
                    })}
                </div>
            </Container>
        </section>
    )
}

export default SectionTwo