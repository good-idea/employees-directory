import styled, { css } from '@xstyled/styled-components'

export const Button = styled.button`
  padding: 2;
  background-color: primary.0;
  color: offset.0;
  border-radius: 3;
  text-transform: uppercase;
  font-size: 1;
  font-weight: 4;
  font-family: sans;

  &[disabled] {
    opacity: 0.5;
  }
`
