import { CardMedia, Container, Typography } from "@mui/material";
import { styles } from '../shared/styles';
const profile_url = "https://media.licdn.com/dms/image/D4D03AQF7KCUBt4hGgg/profile-displayphoto-shrink_800_800/0/1679346582157?e=1714608000&v=beta&t=zkYijVlJWmg9ggcUFCBmozJe2GZkC0JehdMfPOnXiZU"
export default function Home() {
    return (
        <Container sx={styles.container}>
            <CardMedia
                sx={styles.profileImage}
                component="img"
                image={profile_url}
                alt={"abdo gomaa image"}
            />
        </Container>
    )
}