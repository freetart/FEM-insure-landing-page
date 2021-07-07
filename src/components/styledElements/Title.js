import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';

export const HeroTitle = styled.h1`
  ${headingStyles}
  line-height: 1;
  font-size: 8rem;
  color: var(--white);
`;

export const SectionTitle = styled.h2`
  ${headingStyles}
  line-height: 1;
  font-size: 6rem;
  color: var(--veryDarkViolet);
`;

export const BannerTitle = styled.h2`
  ${headingStyles}
  line-height: 1;
  font-size: 5rem;
  color: var(--white);
`;
