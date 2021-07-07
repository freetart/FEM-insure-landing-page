import styled, { css } from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

export const Button = styled.a`
  ${textStyles};
  padding: 1rem 2rem;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: var(--mainShadow);
  font-size: var(--xxs);
  transition: var(--mainTransition);
  display: inline-block;
  z-index: 1;

  ${({ primary }) =>
    primary &&
    css`
      background-color: transparent;
      border: 0.2rem solid var(--veryDarkViolet);
      color: var(--veryDarkViolet);
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      border: 0.2rem solid var(--white);
      color: var(--white);
    `}

  &:hover,
  &:focus {
    ${({ primary }) =>
      primary &&
      css`
        background-color: var(--veryDarkViolet);
        color: var(--white);
      `}

    ${({ secondary }) =>
      secondary &&
      css`
        background-color: var(--white);
        color: var(--veryDarkViolet);
      `}
  }
`;
