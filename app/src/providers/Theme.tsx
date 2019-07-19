import * as React from 'react'
import { ThemeProvider } from '@xstyled/styled-components'
import { defaultTheme, bossTheme, GlobalStyles } from '../theme'
import { useBossMode } from './BossMode'

interface ThemeProps {
  children: React.ReactNode
}

export const Theme = ({ children }: ThemeProps) => {
  const { bossMode } = useBossMode()

  const theme = bossMode ? bossTheme : defaultTheme

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        {children}
      </React.Fragment>
    </ThemeProvider>
  )
}
