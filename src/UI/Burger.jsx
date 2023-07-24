import { useState } from "react"
import Footer from "../footer/Footer";
import style from "./Burger.module.scss"
import Button from "./Button";
import Description from "./Description";
import LogoIcon from "./LogoIcon";

const Burger = ({links}) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(open ? false : true)
        if(!open){
            document.body.classList.add("lock");
        } else {
            document.body.classList.remove("lock");
        }
    }

    return (
        <>
            <button onClick={handleClick} style={{color: "#fff"}} className={style.burger}>
                <span className={style.item}></span>
            </button>
            {open && (
                <div className={`${style.fieldBurger} ${style.active}`}>
                    <ul>
                    {links.map((el, idx) => {
                        return <li key={idx}><a href={el.url}>{el.name}</a></li>
                    })}
                    </ul>
                    <div className={style.shortInformation}>
                <span width="170px" height="48px"><LogoIcon /></span>
                <Description mt={35} fsize={0.9375} boxWidth={289}>
                    Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .
                </Description>
            </div>
                </div>
            )}
        </>
    )
}

export default Burger