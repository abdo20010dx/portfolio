import { grey } from '@mui/material/colors';
import { SxProps } from '@mui/system';

interface Styles {
    container: SxProps
    profileImage: SxProps
    divider: SxProps,
    head: SxProps,
}
const backImageUrl = "https://wallpapers-hub.art/wallpaper-images/136664.jpg"
export const styles: Styles = {
    container: { backgroundImage: `url(${backImageUrl})`, backgroundRepeat: "repeat-y", backgroundSize: "100%", paddingLeft: "2em", paddingRight: "2em", paddingTop: "2em", backgroundColor: "whitesmoke" },
    profileImage: { width: "30%", borderRadius: "50%", objectFit: "fill" },
    divider: { backgroundColor: "white", marginBottom: "1em" },
    head: { color: "white" }
}