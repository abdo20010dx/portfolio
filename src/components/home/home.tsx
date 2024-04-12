import { Box, CardMedia, Container, CssBaseline, Divider, Typography } from "@mui/material";
import { styles } from '../../shared/styles';
const profile_url = "https://media.licdn.com/dms/image/D4D03AQGVNOC85L2_vw/profile-displayphoto-shrink_800_800/0/1712528516549?e=1718236800&v=beta&t=baYQUQFNbyzaFjtg9wzCuoPpGwWn1BqplkG3RDPgiec"
export default function Home() {
    return (
        <Box sx={styles.container}>
            <CardMedia
                sx={styles.profileImage}
                component="img"
                image={profile_url}
                alt={"abdo gomaa image"}
            />
            <br />
            <Divider variant="fullWidth" sx={styles.divider} />
            <Typography sx={styles.head}>Hello , i'm abdo gomaa</Typography>
            <br />
            <Typography sx={styles.title}>Title : Software Developer | Backend Developer | Fullstack Developer</Typography>
            <br />
            <Typography sx={styles.title}>Tech Skills.</Typography>
            <Typography component={"ul"} sx={styles.techSkills}>
                <li>Work with development teams and product managers to ideate software solutions.</li>
                <li>Design client-side and server-side architecture.</li>
                <li>Build the front-end of applications through appealing visual design.</li>
                <li>Develop and manage well-functioning databases and applications.</li>
                <li>Write effective APIs.</li>
                <li>Developing and maintaining server-side  and client-side apps.</li>
                <li>Ensuring optimal performance of the central database and responsiveness to front-end requests.</li>
                <li>Collaborating with front-end and back-end developers on the integration of elements.</li>
                <li>Designing customer-facing UI and back-end services for various business processes.</li>
                <li>Developing high-performance applications by writing testable, reusable, and efficient code.</li>
                <li>Implementing effective security protocols, data protection measures, and storage solutions.</li>
                <li>Running diagnostic tests, repairing defects, and providing technical support.</li>
                <li>Documenting app processes, including database schemas, as well as preparing reports.</li>
                <li>Recommending and implementing improvements to processes and technologies.</li>
                <li>Keeping informed of advancements in the field of development.</li>
            </Typography>
            <br />
            <Typography sx={styles.title}> Soft Skills.</Typography>

            <Typography component={"ul"} sx={styles.softSkills}>
                <li>Problem-solving skills and critical thinking</li>
                <li>Communication skills</li>
                <li>People and interpersonal skills</li>
                <li>Self-awareness</li>
                <li>Self-learning</li>
                <li>Accountability</li>
                <li>Time management</li>
                <li>Emotional intelligence</li>
                <li>Final word</li>
            </Typography>
            <br />

        </Box>
    )
}