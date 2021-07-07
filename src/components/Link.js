import styled from 'styled-components';
import { textStyles } from '../abstracts/Mixins';

const Container = styled.li`
  .link {
    ${textStyles}
    font-size: var(--xxs);
    text-transform: uppercase;
    color: var(--lightGray);
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: var(--black);
    }
  }
`;
const Link = ({ text }) => {
  return (
    <Container>
      <a href='#!' className='link'>
        {text}
      </a>
    </Container>
  );
};

export default Link;
