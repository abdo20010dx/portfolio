import React from "react";
import ResumeSkills from "./ResumeSkills";
import Education from "./Education";
import { Container, Grid } from "@mui/material";
import WorkExperience from "./WorkExperience";
import { Zoom } from "@mui/material";
import { makeStyles } from "@mui/styles";

const classes: any = {
  root: {
    height: "100vh",
    width: "100%",
  },

  paper: {
    padding: "5px 10px",
    minWidth: "200px",
    backgroundColor: "#555",
    color: "white",
  },
};

const Resume = () => {



  return (
    <Zoom in timeout={{ enter: 500, exit: 300 }}>
      <Container>
        <Grid container sx={classes.root}>
          <Grid item sx={classes.rootItems} md={6} lg={6} sm={6} xs={12}>
            <Education classes={classes.paper} />
            <WorkExperience classes={classes.paper} />
          </Grid>
          <Grid item sx={classes.rootItems} md={6} lg={6} sm={6} xs={12}>
            <ResumeSkills />
          </Grid>
        </Grid>
      </Container>
    </Zoom>
  );
};

export default Resume;
