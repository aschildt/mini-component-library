import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: 16,
    borderThickness: 1,
    iconSize: 16,
  },
  large: {
    fontSize: 18,
    borderThickness: 2,
    iconSize: 24,
  },
}

const TextInput = styled.input`
  width: var(--width);
  border: none;
  font-size: 14px;
  color: inherit;
  font-size: var(--font-size);
  font-weight: 700;
  outline: none;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`
const Wrapper = styled.div`
  border-bottom: var(--stroke) solid ${COLORS.black};
  display: flex;
  width: fit-content;
  padding: 4px 0;
  column-gap: 10px;
  color: ${COLORS.gray500};

  &:focus-within{
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`
const IconWrapper = styled.div`
  display: inline-block;
  display: flex;
  align-items: center;
`
const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size]
  return (
  <Wrapper style={{
    '--stroke': styles.borderThickness + 'px',
  }}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <IconWrapper><Icon id={icon} size={styles.iconSize} strokeWidth={styles.borderThickness}/></IconWrapper>
    <TextInput placeholder={placeholder} style={{
      '--width': width + 'px',
      '--font-size': styles.fontSize,
    }}/>
  </Wrapper>
  )
};

export default IconInput;
