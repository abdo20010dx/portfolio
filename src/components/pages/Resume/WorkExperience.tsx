import React from "react";

import { Box, Grid, useMediaQuery, ListItemText, useTheme, List, Paper, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot
} from "@mui/lab";
import WorkIcon from '@mui/icons-material/Work'

import { personalInfo } from "../../../assets/data/personalInfo";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles((theme: any) => ({
  root: {},
  timelineContent: {
    flex: 3,
    padding: "6px 16px",
  },
  paper: {
    padding: "2px 5px",
    borderRadius: "12px"

  },
  opositeItem: {
    flex: 1,
    padding: 0,
    textAlign: "left",
  },

  missingOppositeContent: {
    "&:before": {
      display: "none",
    },
  },
  listPadding: {
    padding: 0,
  },
}));

const WorkExperience = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container className={classes.root} key={Math.random()}>
      {isMobile ? (
        <Grid item>
          <Typography variant="h6" align="center" style={{ fontWeight: 'bold' }}>
            Experience
          </Typography>
          {personalInfo.jobs.map((job) => (
            <Timeline key={job.id}>
              <TimelineItem classes={{ root: classes.missingOppositeContent }}>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="caption">
                    <Box>
                      {job.year.start} - {job.year.end}
                    </Box>
                  </Typography>
                  <Typography variant="caption" style={{ fontWeight: 'bold' }}>{job.company}</Typography>
                  <br />
                  <Typography variant="caption" style={{ fontWeight: 'bold' }}>{job.type}</Typography>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="body1" color="primary" style={{ fontWeight: 'bold' }}>
                      {job.title}
                    </Typography>
                    {job.description.map((job) => (
                      <List
                        classes={{ root: classes.listPadding }}
                        key={Math.random()}
                      >
                        <ListItemText>
                          <Typography variant="body2">{job}</Typography>
                        </ListItemText>
                      </List>
                    ))}
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          ))}
        </Grid>
      ) : (
        <Grid item>
          <Typography variant="h5" align="center" style={{ fontWeight: 'bold' }}>
            Experience
          </Typography>
          <Timeline>
            {personalInfo.jobs.map((job) => (
              <TimelineItem key={job.id}>
                <TimelineOppositeContent
                  classes={{ root: classes.opositeItem }}
                >
                  <Box >
                    <Typography variant="caption">
                      <Box>
                        {job.year.start} - {job.year.end}
                      </Box>
                    </Typography>
                    <Typography variant="caption">{job.company}</Typography>
                    <br />
                    <Typography variant="caption">{job.type}</Typography>
                  </Box>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" variant='outlined'>
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent classes={{ root: classes.timelineContent }}>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="body1" style={{ fontWeight: 'bold' }} color='primary'>{job.title}</Typography>
                    {job.description.map((job) => (
                      <Typography variant="body1" key={Math.random()}>
                        {job}
                      </Typography>
                    ))}
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Grid>
      )}
    </Grid>
  );
};
export default WorkExperience;
