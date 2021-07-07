import { css } from 'styled-components';

const breakpoints = {
  xs: '400px',
  sm: '650px',
  md: '768px',
  lg: '1000px',
};

const Responsive = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default Responsive;
