import { SxProps } from '@mui/system';
import background from '../components/home/background.jpg'

interface Styles {
    appBar: SxProps
    container: SxProps
    profileImage: SxProps
    divider: SxProps,
    head: SxProps,
    title: SxProps,
    accordion: SxProps
}
const backImageUrl = "background.jpg"
export const styles: Styles = {
    appBar: { marginBottom: "2rem" },
    container: { backgroundImage: `url(${background})`, backgroundRepeat: "repeat-y", backgroundSize: "100%", marginLeft: "2em", marginRight: "2rem", paddingLeft: "2em", backgroundColor: "whitesmoke" },
    profileImage: { width: "30%", borderRadius: "50%", objectFit: "fill" },
    divider: { backgroundColor: "white", marginBottom: "1em" },
    head: { color: "white", fontSize: "5rem", fontFamily: "fantasy" },
    title: { color: "white", fontSize: "3rem", fontWeight: "bold", fontFamily: "cursive" },
    accordion: { bgcolor: "success.light", color: "whitesmoke" },
}