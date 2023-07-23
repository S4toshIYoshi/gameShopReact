import FireText from "./FireText"
import Heading from "./Heading"
import style from "./NewsCard.module.scss"

const NewsCard = ({size="min", date, headline, image, imageAlt, idx}) => {
    return (
        <div className={size === "max" ? style.cardMax : style.card} style={{gridArea: `im${idx}`}}>
            <img src={image} alt={imageAlt}/>
            <FireText fire={false}>{date}</FireText>
            <Heading h={size === "max" ? 3 : 4} boxWidth={size === "max" ? 607 : 281}>{headline}</Heading>
        </div>
    )
}

export default NewsCard