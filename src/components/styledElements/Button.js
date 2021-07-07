import styled, { css } from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

export const Button = styled.a`
  ${textStyles};
  padding: 1rem 2rem;
  text-transform: uppercase;
  cursor: pointer;
  border: 0.2rem solid var(--black);
  box-shadow: var(--mainShadow);
  font-size: var(--xxs);
  transition: var(--mainTransition);

  ${({ primary }) =>
    primary &&
    css`
      background-color: transparent;
      color: var(--veryDarkViolet);
    `}

  &:hover,
  &:focus {
    ${({ primary }) =>
      primary &&
      css`
        background-color: var(--black);
        color: var(--white);
      `}
  }
`;
