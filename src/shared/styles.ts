import { SxProps } from '@mui/system';
import background from '../components/home/background.jpg'
interface Styles {
    appBar: SxProps
    container: SxProps
    profileImage: SxProps
    divider: SxProps,
    head: SxProps,
    title: SxProps,
    techSkills: SxProps,
    softSkills: SxProps,
    accordion: SxProps

    root: SxProps,
    button: SxProps
    tab: SxProps
    search: SxProps
    menu: SxProps
    menuFormControl: SxProps
    footer: SxProps
    footerContent: SxProps
    source: SxProps
    thumbLike: SxProps
    imageDetais: SxProps

}
const backImageUrl = "background.jpg"
export const styles: Styles = {
    appBar: { marginBottom: "2rem" },
    container: { /*backgroundImage: `url(${background})`, backgroundRepeat: "repeat-y", backgroundSize: "100%",*/ marginLeft: "2em", marginRight: "2rem", paddingLeft: "2em", backgroundColor: "whitesmoke" },
    profileImage: { width: "30%", borderRadius: "50%", objectFit: "fill" },
    divider: { backgroundColor: "black", marginBottom: "1em" },
    head: { color: "black", fontSize: "3rem", fontFamily: "fantasy" },
    title: { color: "black", fontSize: "1.7rem", fontWeight: "bold", fontFamily: "cursive" },
    techSkills: { color: "black", fontSize: "1.5rem", fontWeight: "bold", fontFamily: "cursive" },
    softSkills: { color: "black", fontSize: "1.5rem", fontWeight: "bold", fontFamily: "cursive" },
    accordion: { bgcolor: "primary.light", color: "whitesmoke" },

    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    button: {
        // background: green["100"],
        // color: yellow[900],

        display: { xs: 'none', sm: 'block' },
        padding: '1em'
    },
    tab: {
        color: 'black',
        fontWeight: 'bold'
    },
    search: {
        minWidth: { xs: "50%", s: "50%", md: "50%", lg: "25rem" },
        textAlign: 'center',

    },
    menu: {
        borderRadius: "1rem",
        padding: "1.5rem"

    },
    menuFormControl: {
        display: "flex",
        width: "100%",
        paddingBottom: "1rem",

    },
    footer: {

        height: "20rem",
        width: "100%",
    },
    footerContent: {
        textAlign: "left",
        marginTop: "5rem"
    },
    source: {
        display: "inline-block",

    },
    thumbLike: { fontSize: "2rem" },
    imageDetais: {
        objectFit: "fill",
        height: '30em', //em equal number times of current font size
        width: '70%', //em equal number times of

    }

}