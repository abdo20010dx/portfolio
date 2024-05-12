import React, { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles((theme: any) => ({
  menuBtn: {
    position: "fixed",
    bottom: "10px",
    right: "15px",
    zIndex: 900,
    "&:hover": {
      opacity: 0.5,
    },
  },
}));

const BackTopBtn = () => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false)

  const toggleView = () => {
    if (window.pageYOffset > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleView)

    return () => {
      window.removeEventListener('scroll', toggleView)
    }
  }, [])

  return (
    <>
      {visible &&
        <Fab
          size="small"
          color="primary"
          aria-label="menu"
          className={classes.menuBtn}
          onClick={scrollToTop}
        >
          <ArrowDropUpIcon />
        </Fab>
      }
    </>
  );
};

export default BackTopBtn;
