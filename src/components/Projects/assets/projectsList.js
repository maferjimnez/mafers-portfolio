import GifosImg from "./gifos.png"
import ReservasImg from "./reserva-alojamiento.png";
import RewardsImg from "./rewards-store.png";
import MarvelImg from "./meet-your-hero.png"
import theme from "../../../styles/theme";

const projectList = [
        {
            name:"GifOs",
            img: GifosImg,
            link:"https://proyecto-gifos.vercel.app/",
            github:"https://github.com/maferjimnez/proyecto-gifos",
            technologies:"HTML5, CSS, Sass (scss), Javascript",
            backgroundColor: theme.colors.gifosBackground,
            hoverBackgroundColor: theme.colors.gifosBackgroundHover
        },
        {
            name:"Reservas Alojamientos",
            img: ReservasImg,
            link: "https://proyecto-reserva-alojamientos-maferjimnez.vercel.app/",
            github:"https://github.com/maferjimnez/proyecto-reserva-alojamientos",
            technologies: "React js, Sass, Styled components, Moment.js, Material UI",
            backgroundColor: theme.colors.reservaBackground,
            hoverBackgroundColor: theme.colors.reservaBackgroundHover
        },
        {
            name: "Rewards Store",
            img: RewardsImg,
            link: "https://maferjimnez.github.io/proyecto-reward-store/#/",
            github: "https://github.com/maferjimnez/proyecto-reward-store",
            technologies: "React js, React hooks (context, custom hook), React router, Material UI, Styled components",
            backgroundColor:theme.colors.rewardsBackground,
            hoverBackgroundColor: theme.colors.reservaBackgroundHover
        },
        {
            name:"Meet Your Hero",
            img: MarvelImg,
            link: "https://meet-your-hero-mafer-git-main-maferjimnez.vercel.app/",
            github: "https://github.com/maferjimnez/meet-your-hero",
            technologies: "HTML5, Sass (scss), Javascript + jQuery",
            backgroundColor: theme.colors.marvelBackground,
            hoverBackgroundColor: theme.colors.marvelBackgroundHover
        },
    ]

export default projectList;