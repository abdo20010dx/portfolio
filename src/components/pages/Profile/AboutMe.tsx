import { Box, Button, Grid, Zoom } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PhoneIcon from '@mui/icons-material/Phone'
import React from 'react'
import { personalInfo } from '../../../assets/data/personalInfo'
import profileImage from '../../../assets/images/profile.jpg'
import ResumeBtn from '../../UI/ResumeBtn'
import { makeStyles } from '@mui/styles'

const useStyles: any = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  rootItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    marginTop: '2rem',
  },

  avatarLarge: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },

  avatarMid: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}))

const AboutMe = ({ isMobile }: any) => {
  const classes = useStyles()

  const onClickHandler = (e: any) => {
    const linkTo = e.target.innerText.includes('@') ? 'mailto' : 'tel'
    const link = document.createElement('a')
    link.href = `${linkTo}:${e.target.innerText}`
    link.click()
  }

  return (
    <>
      <Zoom in timeout={{ enter: 500, exit: 500 }}>
        <div>
          {personalInfo.personalProfile.map((profile) => (
            <Grid container key={Math.random()} className={classes.root}>
              <Grid item className={classes.rootItems}>
                <Avatar
                  alt='profile picture'
                  variant='circular'
                  src={profileImage}
                  className={isMobile ? classes.avatarMid : classes.avatarLarge}
                />
                <Typography variant={isMobile ? 'h5' : 'h4'}>
                  {profile.firstName} {profile.lastName}
                </Typography>
                <Typography variant={isMobile ? 'h6' : 'h5'}>
                  {profile.occupation}
                </Typography>
                <Box sx={{ mt: 10, mb: 10, width: '80%' }}>
                  <Typography
                    align='center'
                    variant={isMobile ? 'body1' : 'h6'}>
                    Self-taught web developer from Cairo,
                    Egypt, interested in IT and everything in its orbit.
                  </Typography>
                  <Typography
                    align='center'
                    variant={isMobile ? 'body1' : 'h6'}>
                    My coding skills are: JavaScript, Typescript , nodejs ,nestjs,sql and database, React, Next.JS, HTML,CSS And CI/CD .
                  </Typography>
                  <Typography
                    align='center'
                    variant={isMobile ? 'body1' : 'h6'}>
                    I currently aim to learn as much as I can in a work environment and to improve my abilities in a professional setting.
                  </Typography>
                </Box>
              </Grid>
              <Grid item >
                <Box>
                  <Button size='small' onClick={onClickHandler}>
                    <PhoneIcon />
                    <Typography
                      style={{
                        marginLeft: '5px',
                        fontSize: isMobile && '0.9rem',
                      }}>
                      {profile.phone}
                    </Typography>
                  </Button>
                </Box>
                <Box >
                  <Button
                    size='small'
                    style={{ textTransform: 'lowercase' }}
                    onClick={onClickHandler}>
                    <EmailIcon />
                    <Typography
                      style={{
                        marginLeft: '5px',
                        fontSize: isMobile && '0.9rem',
                      }}>
                      {profile.email}
                    </Typography>
                  </Button>
                </Box>
              </Grid>
              <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  href={profile.socialMediaLinks.githubUrl}
                  target='_blank'>
                  <GitHubIcon color='primary' />
                </IconButton>
                <IconButton
                  href={profile.socialMediaLinks.linkedInUrl}
                  target='_blank'>
                  <LinkedInIcon color='primary' />
                </IconButton>
                <ResumeBtn />
              </Grid>
            </Grid>
          ))}
        </div>
      </Zoom>
    </>
  )
}

export default AboutMe
