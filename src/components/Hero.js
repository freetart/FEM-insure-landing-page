import styled from 'styled-components';
import { headingStyles, maxWidthLg, textStyles } from '../abstracts/Mixins';
import { Button } from './styledElements/Button';
import heroImg from '../images/image-intro-desktop.jpg';
import bgPatternLeft from '../images/bg-pattern-intro-left-desktop.svg';
import bgPatternRight from '../images/bg-pattern-intro-right-desktop.svg';

const Header = styled.header`
  background-color: var(--veryDarkViolet);
  height: 75vh;
  position: relative;

  .bg-pattern {
    position: absolute;
    pointer-events: none;
    z-index: 10;
  }

  .bg-pattern-left {
    top: 70%;
    width: 15%;
  }

  .bg-pattern-right {
    top: 0;
    right: 0;
    width: 30%;
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  padding: 10rem 2rem 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;

  .info {
    color: var(--white);
  }

  .underline {
    height: 0.1rem;
    margin-bottom: 3rem;
    width: 30%;
    background-color: var(--veryLightGray);
  }

  .hero-heading {
    ${headingStyles}
    line-height: 1;
    font-size: 8rem;
  }

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
  }
`;

const Hero = () => {
  return (
    <Header>
      <img src={bgPatternLeft} className={`bg-pattern bg-pattern-left`} />
      <img src={bgPatternRight} className={`bg-pattern bg-pattern-right`} />
      <Container>
        <div className='info'>
          <div className='underline'></div>
          <h1 className='hero-heading'>
            Humanizing <br />
            your insurance.
          </h1>
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
