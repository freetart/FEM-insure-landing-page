import styled from 'styled-components';
import { Underline } from './styledElements/Underline';
import { SectionTitle } from './styledElements/Title';
import {
  headingStyles,
  maxWidthLg,
  sectionSpacingMd,
  textStyles,
} from '../abstracts/Mixins';
import featureIconOne from '../images/icon-snappy-process.svg';
import featureIconTwo from '../images/icon-affordable-prices.svg';
import featureIconThree from '../images/icon-people-first.svg';

const Container = styled.div`
  ${maxWidthLg}
  padding-top: 30rem;

  .features {
    ${sectionSpacingMd}
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
  }

  .feature {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .feature-icon {
    width: 10rem;
  }

  .feature-heading {
    ${headingStyles}
    font-size: var(--md);
  }

  .feature-desc {
    ${textStyles}
    font-size: var(--xxs);
    color: var(--lightGray);
  }
`;

const Features = () => {
  return (
    <section>
      <Container>
        <Underline dark></Underline>
        <SectionTitle>We're different</SectionTitle>
        <div className='features'>
          <article class='feature'>
            <img
              src={featureIconOne}
              alt='icon of a lighting bolt'
              class='feature-icon'
            />
            <h4 className='feature-heading'>Snappy Process</h4>
            <p className='feature-desc'>
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </p>
          </article>
          <article class='feature'>
            <img
              src={featureIconTwo}
              alt='icon of a dollar sign'
              class='feature-icon'
            />
            <h4 className='feature-heading'>Affordable Prices</h4>
            <p className='feature-desc'>
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </article>
          <article class='feature'>
            <img
              src={featureIconThree}
              alt='icon of a user'
              class='feature-icon'
            />
            <h4 className='feature-heading'>People First</h4>
            <p className='feature-desc'>
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Features;
