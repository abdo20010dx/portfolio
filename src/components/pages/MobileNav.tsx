import { List } from '@mui/material'
import Drawer from '@mui/material/Drawer'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'

import { menuItems } from './NavBar'
import { makeStyles } from '@mui/styles'

const useStyles: any = makeStyles((theme: any) => ({
  drawer: {
    width: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '70%',
    borderRadius: 15,

    backgroundColor: 'rgba(122, 111, 92, 0.2)',
    backdropFilter: 'blur(10px)',
  },

  navItemsSelectedDark: {
    color: '#e65100',
    "&.active": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    '& .MuiListItemIcon-root': {
      color: '#e65100',
    },
    '&:hover': {
      color: 'white',
    },
  },
}))

const MobileProfile = ({ open, handleOpenMenu, isMobile }: any) => {
  const classes = useStyles()
  const location = useLocation()

  return (
    <>

      <Drawer
        variant='temporary'
        anchor='right'
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        open={open}
        onClose={handleOpenMenu}>
        <List>
          {menuItems.map((item) => (
            <ListItem

              button
              component={NavLink}
              to={item.path}
              onClick={handleOpenMenu}
              key={item.text}
              selected={item.path === location.pathname}
              classes={{ selected: classes.navItemsSelectedDark }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>
                <Typography style={{ fontWeight: 700 }}>
                  {item.text}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>

    </>
  )
}

export default MobileProfile
