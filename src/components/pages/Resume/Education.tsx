import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import School from "@mui/icons-material/School";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box, Grid, SxProps, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { personalInfo } from "../../../assets/data/personalInfo";
import { makeStyles } from "@mui/styles";
class Classes {
  opositeItem?: SxProps
  timelineContent?: SxProps
  paper?: SxProps
  missingOppositeContent?: SxProps
}
const classes: Classes = {
  opositeItem: {
    flex: 1,
    padding: 0,
    textAlign: "right",
  },
  timelineContent: {
    flex: 3,
    padding: "6px 16px",
  },
  paper: {
    padding: "3px 6px",
    borderRadius: "12px",
  },
  missingOppositeContent: {
    "&:before": {
      display: "none",
    },
  },
};

const Education = (props: any) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container >
      {isMobile ? (
        <Timeline>
          <Typography variant="h6" align="center" style={{ fontWeight: 'bold' }}>
            Education
          </Typography>
          {personalInfo.education.map((school) => (
            <TimelineItem
              key={school.id}
              sx={classes.missingOppositeContent}
            >
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="caption">
                  <Box>
                    {school.year.start} - {school.year.end}
                  </Box>
                </Typography>
                <Paper elevation={3} sx={classes.paper}>
                  <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                    {school.schoolName}
                  </Typography>
                  <Typography variant="body2" style={{ fontWeight: 'bold' }} color='primary'>{school.degree}</Typography>
                  <Typography variant="body2">{school.speciality}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      ) : (
        <Timeline>
          <Typography variant="h5" align="center" style={{ fontWeight: 'bold' }}>
            Education
          </Typography>
          {personalInfo.education.map((school) => (
            <TimelineItem key={school.id}>
              <TimelineOppositeContent sx={classes.opositeItem}>
                <Typography variant="caption">
                  <Box>
                    {school.year.start} - {school.year.end}
                  </Box>
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" variant='outlined'>
                  <School />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={classes.timelineContent}>
                <Paper elevation={3} sx={classes.paper}>
                  <Typography variant="body1" style={{ fontWeight: 'bold' }} >
                    {school.schoolName}
                  </Typography>
                  <Typography variant="body2" style={{ fontWeight: 'bold' }} color='primary'>{school.degree}</Typography>
                  <Typography variant="body1">{school.speciality}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </Grid>
  );
};

export default Education;
