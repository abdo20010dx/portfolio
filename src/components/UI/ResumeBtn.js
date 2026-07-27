import React from 'react'
import Button from '@material-ui/core/Button'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
const ResumeBtn = () => {
  const onDownload = () => {
    const link = document.createElement('a')
    link.download = `resume.pdf`
    // Use absolute path that works on GitHub Pages from any route
    // Check if we're on GitHub Pages (production) and use the correct base path
    const isProduction = process.env.NODE_ENV === 'production'
    const basePath = isProduction ? '/portfolio' : (process.env.PUBLIC_URL || '')
    link.href = `${basePath}/resume.pdf`
    link.click()
  }
  return (
    <div>
      <Button
        endIcon={<CloudDownloadIcon />}
        variant='text'
        color='primary'
        size='small'
        onClick={onDownload}
        target='_blank'>
        Download CV
      </Button>
    </div>
  )
}

export default ResumeBtn
