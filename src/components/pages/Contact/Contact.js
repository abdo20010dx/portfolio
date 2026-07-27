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

// WhatsApp Icon SVG
const WhatsAppIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

// Telegram Icon SVG
const TelegramIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
)

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
    maxWidth: '100%',
    overflowX: 'hidden',
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
    width: '100%',
    maxWidth: '100%',
  },

  contactItem: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.5rem',
    width: '100%',
    maxWidth: '100%',
    padding: '0 1rem',
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
    // Use absolute path that works on GitHub Pages from any route
    // Check if we're on GitHub Pages (production) and use the correct base path
    const isProduction = process.env.NODE_ENV === 'production'
    const basePath = isProduction ? '/portfolio' : (process.env.PUBLIC_URL || '')
    link.href = `${basePath}/resume.pdf`
    link.click()
  }

  return (
    <>
      <Zoom in timeout={{ enter: 500, exit: 500 }}>
        <div style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
          {personalInfo.personalProfile.map((profile) => (
            <Grid container key={Math.random()} className={classes.root}>
              <Grid item xs={12} className={classes.rootItems}>
                <Box sx={{ mt: 2, mb: 1, width: '100%', maxWidth: '100%', px: 2 }}>
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

                <Grid container spacing={1} justifyContent='center' style={{ width: '100%', maxWidth: '100%', margin: 0 }}>
                  <Grid item xs={12} sm={6} md={4} style={{ width: '100%', maxWidth: '100%' }}>
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
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}>
                          {profile.email}
                        </Typography>
                      </Button>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} style={{ width: '100%', maxWidth: '100%' }}>
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
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}>
                          {profile.phone}
                        </Typography>
                      </Button>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} style={{ width: '100%', maxWidth: '100%' }}>
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
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}>
                          {profile.city}, {profile.country}
                        </Typography>
                      </Button>
                    </Box>
                  </Grid>
                </Grid>

                <Box sx={{ mt: 2, mb: 1, width: '100%', maxWidth: '100%' }}>
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
                      width: '100%',
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

                <Box sx={{ mt: 2, mb: 1, width: '100%', maxWidth: '100%' }}>
                  <Typography
                    align='center'
                    variant={isMobile ? 'h6' : 'h5'}
                    style={{ marginBottom: '0.5rem' }}>
                    Connect With Me
                  </Typography>
                  <Box className={classes.iconContainer}>
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
                    <IconButton
                      href="https://wa.me/201151761416"
                      target='_blank'
                      color='primary'
                      size='large'>
                      <WhatsAppIcon style={{ width: 28, height: 28 }} />
                    </IconButton>
                    <IconButton
                      href="https://t.me/+201151761416"
                      target='_blank'
                      color='primary'
                      size='large'>
                      <TelegramIcon style={{ width: 28, height: 28 }} />
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

