import React from 'react'
import Button from '@mui/material/Button'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
const ResumeBtn = () => {
  const onDownload = () => {
    const link = document.createElement('a')
    link.download = `resume.pdf`
    link.href = './resume.pdf'
    link.click()
  }
  return (
    <div>
      <Button
        href=''
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
