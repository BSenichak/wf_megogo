import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Trans } from 'react-i18next'

export default function Footer() {
  return (
    <Box component="footer" sx={{
        bgcolor: "primary.main",
        boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.2)"
    }}>
        <Typography variant='body1' color='secondary.contrastText' align='center' sx={{p: 1}}>
            &copy; Robocode {new Date().getFullYear()} <Trans>rights</Trans>
        </Typography>
    </Box>
  )
}
