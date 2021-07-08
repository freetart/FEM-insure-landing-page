import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';

export const HeroTitle = styled.h1`
  ${headingStyles}
  line-height: 1;
  font-size: 8rem;
  color: var(--white);
  z-index: 10;

  ${Responsive.sm`
    font-size: 6rem; 
  `}
`;

export const SectionTitle = styled.h2`
  ${headingStyles}
  line-height: 1;
  font-size: 6rem;
  color: var(--veryDarkViolet);

  ${Responsive.md`
    text-align: center; 
  `}
`;

export const BannerTitle = styled.h2`
  ${headingStyles}
  line-height: 1;
  font-size: 5rem;
  color: var(--white);
  z-index: 10;
`;
