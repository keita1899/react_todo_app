import styled, { css } from 'styled-components'

export const SButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`
