import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Alert, Box, CardMedia, Divider } from '@mui/material';
import { WorkspacePremium } from '@mui/icons-material';
import { styles } from '../../shared/styles';
import { certificatesData } from './data';
const nodeCert = require("./certificates/nodejs_certificate.pdf")
export default function Certificates() {
    return (
        <Box sx={{ paddingRight: "2rem", paddingLeft: "2rem" }}>
            {certificatesData.map(((certificate) => (

                <>
                    <Accordion key={certificate.title}>
                        <AccordionSummary
                            sx={styles.accordion}
                            expandIcon={<WorkspacePremium sx={{ fontSize: "3rem" }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Alert severity='success' sx={{ fontSize: "2rem", width: "95%" }} >{certificate.title}</Alert>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant='h4'>
                                {certificate.description}
                            </Typography>
                            <Typography color={"primary.dark"} component={"a"} variant='h4' href={certificate.url}>Certificate Link</Typography>
                        </AccordionDetails>
                        <CardMedia
                            width="100%"
                            height={"750vh"}
                            component={"object"}
                            data={require(`./certificates/${certificate.pdf}`)}
                        />

                        <br />
                    </Accordion>
                    <Divider variant="fullWidth" sx={styles.divider} />
                </>

            )))}
        </Box>
    )
}