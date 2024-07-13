import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InfoIcon from '@mui/icons-material/Info';
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import { Drawer } from "@mui/material";
import { useLocation } from "react-router";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const menuItems = [

  {
    text: "About Me",
    icon: <InfoIcon />,
    color: "secondary",
    path: "/",
  },
  {
    text: "Resume",
    icon: <SchoolIcon />,
    color: "secondary",
    path: "/resume",
  },
  {
    text: "Porfolio",
    icon: <BusinessCenterIcon />,
    color: "secondary",
    path: "/projects",
  },
];
const drawerWidth = 100;

const useStyles: any = makeStyles((theme: any) => ({
  root: {
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginRight: '0.5rem'
  },
  drawerPaper: {
    width: drawerWidth,
    marginLeft: 4,
    borderRadius: 12,
  },

  paperAnchorLeft: {
    borderRight: 0,
  },
  navItems: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },

  navItemsSelectedDark: {
    color: '#e65100',
    borderRadius: 10,
    '&.active': {
      backgroundColor: "rgba(0,0,0,0)",
      backdropFilter: "blur(13px) saturate(100%)",
    },
    "& .MuiListItemIcon-root": {
      color: '#e65100'
    },
    '&:hover': {
      color: 'white'
    }
  },

  navIcons: {
    justifyContent: "center",
  },
}));

const Navbar = ({ isMobile }: any) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Paper className={classes.root} elevation={3}>
      <Drawer
        variant="persistent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
          paperAnchorLeft: classes.paperAnchorLeft,
        }}
        className={classes.drawer}
        open={!isMobile}
      >
        <List component="nav" >
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              dense
              component={NavLink}
              to={item.path}
              className={classes.navItems}
              selected={item.path === location.pathname}
              classes={{ selected: classes.navItemsSelectedDark }}
            >
              <ListItemIcon className={classes.navIcons}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Paper>
  );
};

export default Navbar;
