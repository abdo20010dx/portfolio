import { grey } from '@mui/material/colors';
import { SxProps } from '@mui/system';

interface Styles {
    container: SxProps
    profileImage: SxProps
}
export const styles: Styles = {
    container: { paddingLeft: "2em", paddingRight: "2em", paddingTop: "2em", backgroundColor: "whitesmoke" },
    profileImage: { width: "50%", borderRadius: "50%", objectFit: "fill" }
}