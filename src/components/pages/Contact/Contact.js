import { Box, Button, Grid, Zoom, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PhoneIcon from '@material-ui/icons/Phone'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import React from 'react'
import { personalInfo } from '../../../assets/data/personalInfo'

const useStyles = makeStyles((theme) => ({
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
    marginTop: '0.5rem',
  },

  contactItem: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const Contact = ({ isMobile }) => {
  const classes = useStyles()

  const onClickHandler = (e) => {
    const linkTo = e.target.innerText.includes('@') ? 'mailto' : 'tel'
    const link = document.createElement('a')
    link.href = `${linkTo}:${e.target.innerText}`
    link.click()
  }

  const onDownloadCV = () => {
    const link = document.createElement('a')
    link.download = 'resume.pdf'
    link.href = '/resume.pdf'
    link.click()
  }

  return (
    <>
      <Zoom in timeout={{ enter: 500, exit: 500 }}>
        <div>
          {personalInfo.personalProfile.map((profile) => (
            <Grid container key={Math.random()} className={classes.root}>
              <Grid item className={classes.rootItems}>
                <Box sx={{ mt: 2, mb: 1, width: '80%' }}>
                  <Typography
                    align='center'
                    variant={isMobile ? 'h4' : 'h3'}
                    style={{ marginBottom: '0.5rem' }}>
                    Get In Touch
                  </Typography>
                  <Typography
                    align='center'
                    variant={isMobile ? 'body1' : 'h6'}
                    style={{ marginBottom: '1rem' }}>
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                  </Typography>
                </Box>

                <Grid container spacing={1} justifyContent='center'>
                  <Grid item xs={12} sm={6} md={4}>
                    <Box className={classes.contactItem}>
                      <Button
                        size='large'
                        onClick={onClickHandler}
                        startIcon={<EmailIcon />}
                        variant='outlined'
                        color='primary'
                        fullWidth>
                        <Typography
                          style={{
                            marginLeft: '5px',
                            fontSize: isMobile && '0.9rem',
                            textTransform: 'lowercase',
                          }}>
                          {profile.email}
                        </Typography>
                      </Button>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Box className={classes.contactItem}>
                      <Button
                        size='large'
                        onClick={onClickHandler}
                        startIcon={<PhoneIcon />}
                        variant='outlined'
                        color='primary'
                        fullWidth>
                        <Typography
                          style={{
                            marginLeft: '5px',
                            fontSize: isMobile && '0.9rem',
                          }}>
                          {profile.phone}
                        </Typography>
                      </Button>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Box className={classes.contactItem}>
                      <Button
                        size='large'
                        startIcon={<LocationOnIcon />}
                        variant='outlined'
                        color='primary'
                        fullWidth
                        disabled>
                        <Typography
                          style={{
                            marginLeft: '5px',
                            fontSize: isMobile && '0.9rem',
                          }}>
                          {profile.city}, {profile.country}
                        </Typography>
                      </Button>
                    </Box>
                  </Grid>
                </Grid>

                <Box sx={{ mt: 2, mb: 1 }}>
                  <Typography
                    align='center'
                    variant={isMobile ? 'h6' : 'h5'}
                    style={{ marginBottom: '0.5rem' }}>
                    Download My CV
                  </Typography>
                  <Box
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '1rem',
                    }}>
                    <Button
                      variant='contained'
                      color='primary'
                      size={isMobile ? 'medium' : 'large'}
                      startIcon={<CloudDownloadIcon />}
                      onClick={onDownloadCV}
                      style={{
                        padding: isMobile ? '10px 20px' : '15px 30px',
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        fontWeight: 'bold',
                      }}>
                      Download CV
                    </Button>
                  </Box>
                </Box>

                <Box sx={{ mt: 2, mb: 1 }}>
                  <Typography
                    align='center'
                    variant={isMobile ? 'h6' : 'h5'}
                    style={{ marginBottom: '0.5rem' }}>
                    Connect With Me
                  </Typography>
                  <Box
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '1rem',
                    }}>
                    <IconButton
                      href={`mailto:${profile.email}`}
                      color='primary'
                      size='large'>
                      <EmailIcon fontSize='large' />
                    </IconButton>
                    <IconButton
                      href={profile.socialMediaLinks.linkedInUrl}
                      target='_blank'
                      color='primary'
                      size='large'>
                      <LinkedInIcon fontSize='large' />
                    </IconButton>
                    <IconButton
                      href={profile.socialMediaLinks.githubUrl}
                      target='_blank'
                      color='primary'
                      size='large'>
                      <GitHubIcon fontSize='large' />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          ))}
        </div>
      </Zoom>
    </>
  )
}

export default Contact

