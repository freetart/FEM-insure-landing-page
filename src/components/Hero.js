import styled from 'styled-components';
import { maxWidthLg, textStyles } from '../abstracts/Mixins';
import { Button } from './styledElements/Button';
import { Underline } from './styledElements/Underline';
import { HeroTitle } from './styledElements/Title';
import heroImg from '../images/image-intro-desktop.jpg';
import bgPatternLeft from '../images/bg-pattern-intro-left-desktop.svg';
import bgPatternRight from '../images/bg-pattern-intro-right-desktop.svg';
import Responsive from '../abstracts/Responsive';

const Header = styled.header`
  background-color: var(--veryDarkViolet);
  min-height: 75vh;
  position: relative;

  ${Responsive.xl`
    min-height: 85vh; 
  `}

  ${Responsive.md`
    min-height: auto;
  `}

  .bg-pattern {
    position: absolute;
    pointer-events: none;
  }

  .bg-pattern-left {
    top: 90%;
    width: 15%;
    z-index: 1;

    ${Responsive.lg`
      width: 15%; 
    `}

    ${Responsive.md`
      top: 50%;
      width: 40%;
    `}
  }

  .bg-pattern-right {
    top: 0;
    right: 0;
    width: 30%;
    z-index: 10;

    ${Responsive.md`
      width: 40%;
      z-index: 1; 
    `}
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  padding: 10rem 2rem 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;

  ${Responsive.xl`
    padding: 15rem 2rem 2rem 2rem; 
  `}

  ${Responsive.md`
    grid-template-columns: 1fr;
    text-align: center; 
  `}

  .hero-lead {
    ${textStyles}
    font-size: var(--xs);
    color: var(--veryLightGray);
    padding: 3rem 0;
  }

  .hero-img {
    box-shadow: var(--mainShadow);
    width: 75%;
    margin: 0 auto;
    transform: translateY(15rem);

    ${Responsive.xl`
      width: 100%; 
    `}

    ${Responsive.lg`
      transform: translateY(0);
    `}

    ${Responsive.md`
      margin-top: 15rem;
    `}
  }
`;

const Hero = () => {
  return (
    <Header>
      <img
        src={bgPatternLeft}
        className={`bg-pattern bg-pattern-left`}
        alt=''
      />
      <img
        src={bgPatternRight}
        className={`bg-pattern bg-pattern-right`}
        alt=''
      />
      <Container>
        <div className='info' data-aos='fade-in'>
          <Underline light></Underline>
          <HeroTitle>
            Humanizing <br />
            your insurance.
          </HeroTitle>
          <p className='hero-lead'>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <Button secondary>View Plans</Button>
        </div>
        <img
          src={heroImg}
          alt='family of four going for a walk'
          className='hero-img'
        />
      </Container>
    </Header>
  );
};

export default Hero;
