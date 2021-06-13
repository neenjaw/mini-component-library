/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const ProgressBarWrapper = styled.div`
  border-radius: ${(p) => (p.size === 'large' ? 8 : 4)}px;
  overflow: hidden;
  padding: ${(p) => (p.size === 'large' ? 4 : 0)}px;
  width: 100%;

  font-size: var(${(p) => `--font-size-${p.size}`});
  font-family: 'Roboto', sans-serif;

  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const ProgressBarInner = styled.div`
  --height-large: 16px;
  --height-medium: 12px;
  --height-small: 8px;

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${(p) => (p.value < 100 ? 0 : 4)}px;
  border-bottom-right-radius: ${(p) => (p.value < 100 ? 0 : 4)}px;

  background-color: ${COLORS.primary};
  width: ${(p) => (p.value < 100 ? p.value : 100)}%;
  height: var(${(p) => `--height-${p.size}`});
`

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressBarWrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <ProgressBarInner value={value} size={size} />
    </ProgressBarWrapper>
  )
}

export default ProgressBar
