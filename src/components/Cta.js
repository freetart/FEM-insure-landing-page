import styled from 'styled-components';
import { BannerTitle } from './styledElements/Title';
import { Button } from './styledElements/Button';
import { maxWidthMd } from '../abstracts/Mixins';
import bgPatternRight from '../images/bg-pattern-intro-right-desktop.svg';

const Container = styled.div`
  ${maxWidthMd}
  box-shadow: var(--mainShadow);
  background-color: var(--veryDarkViolet);
  padding: 8rem;
  margin: 10rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  .bg-pattern {
    position: absolute;
    pointer-events: none;
  }
`;

const Cta = () => {
  return (
    <section>
      <Container>
        <img src={bgPatternRight} class='bg-pattern' />
        <BannerTitle>
          Find out more <br /> about how we work
        </BannerTitle>
        <Button secondary>How We Work</Button>
      </Container>
    </section>
  );
};

export default Cta;
