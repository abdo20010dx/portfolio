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
const nodeCert = require("./certificates/nodejs_certificate.pdf")
const certificatesData = [
    {
        title: "Javascript ",
        description: "The Complete JavaScript Course: From Zero to Expert! by jonas",
        url: "https://www.udemy.com/certificate/UC-59919565-c010-4c62-b955-c8731ccce6cc/",
        pdf: "javascript_certificate.pdf"
    },
    {
        title: "Java ",
        description: "Java 17 Masterclass by tim buchalka",
        url: "https://www.udemy.com/certificate/UC-cf879f8a-9dbd-4ad1-ba4e-c52e64a2d3c6/",
        pdf: "java_certificate.pdf"
    },
    {
        title: "Node Js ",
        description: "NodeJS - The Complete Guide MVC, REST APIs, GraphQL, Deno by maximilian",
        url: "https://www.udemy.com/certificate/UC-26947f83-e26e-4159-a3e5-7e317b3498e0/",
        pdf: "nodejs_certificate.pdf"
    },
    {
        title: "Advanced Cloud DevOps ",
        description: "Advanced Cloud DevOps by udacity and ministry of communication and information technology of egypt .",
        url: "https://www.udacity.com/certificate/CRDMKADD",
        pdf: "devops_udacity_certificate.pdf"
    },
    {
        title: "Nest js ",
        description: "NestJS: The Complete Developer's Guide by Stephen Grider",
        url: "https://www.udemy.com/certificate/UC-a8a7c8dd-f9a4-44ce-8a3e-8a49f764bd32/",
        pdf: "nestjs_certificate.pdf"
    },
    {
        title: "Spring boot & Hibernate ",
        description: " Spring Boot 3, Spring 6 & Hibernate for Beginners by Chad Darby",
        url: "https://www.udemy.com/certificate/UC-3c6ca67a-9b0a-4bf4-aab7-767f127beac4/",
        pdf: "spring_certificate.pdf"
    },
    {
        title: "Typing certificate",
        description: "Typing certificate by ratatype",
        url: "https://www.ratatype.com/u6365990/certificate/en_new/",
        pdf: "abdelrahman gomaa's certificate page.pdf"
    },

]
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