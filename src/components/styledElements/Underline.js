import styled, { css } from 'styled-components';

export const Underline = styled.div`
  height: 0.1rem;
  margin-bottom: 3rem;
  width: 30%;
  background-color: var(--veryLightGray);

  ${({ light }) =>
    light &&
    css`
      background-color: var(--veryLightGray);
    `}

  ${({ dark }) =>
    dark &&
    css`
      background-color: var(--black);
    `}
`;
