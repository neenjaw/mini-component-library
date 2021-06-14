import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Wrapper = styled.div`
  width: max-content;
  position: relative;
`

const NativeSelect = styled.select`
  position: absolute;
  inset: 0;
  width: 100%;
  opacity: 0;
`

const PresentationalSelect = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 52px 12px 16px;

  font-family: 'Roboto', sans-serif;
  font-size: ${18 / 16}rem;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  height: 24px;
  pointer-events: none;
`
const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Wrapper>
      <NativeSelect>{children}</NativeSelect>
      <PresentationalSelect value={value} onChange={onChange}>
        {displayedValue}

        <IconWrapper>
          <Icon id="chevron-down" strokeWidth={2} size={24} />
        </IconWrapper>
      </PresentationalSelect>
    </Wrapper>
  )
}

export default Select
