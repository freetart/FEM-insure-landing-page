import styled, { css } from 'styled-components';
import Responsive from '../../abstracts/Responsive';

export const Underline = styled.div`
  height: 0.1rem;
  margin-bottom: 3rem;
  width: 30%;
  background-color: var(--veryLightGray);

  ${Responsive.md`
  margin: 0 auto 3rem auto;
  width: 50%;
`}

  ${({ light }) =>
    light &&
    css`
      background-color: var(--veryLightGray);
    `}

  ${({ dark }) =>
    dark &&
    css`
      background-color: var(--black);
      width: 15%;
    `}
`;
