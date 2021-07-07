import styled from 'styled-components';
import logo from '../images/logo.svg';
import { maxWidthLg, textStyles } from '../abstracts/Mixins';
import { Button } from './styledElements/Button';

const Nav = styled.nav`
  position: fixed;
  background-color: var(--white);
  width: 100%;
  z-index: 1000;
`;

const Container = styled.div`
  ${maxWidthLg}
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-logo {
    width: 15rem;
  }

  .nav-list {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .nav-link {
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

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <img src={logo} alt='insure logo' className='nav-logo' />
        <ul className='nav-list'>
          <li className='nav-item'>
            <a href='#!' className='nav-link'>
              How We Work
            </a>
          </li>
          <li className='nav-item'>
            <a href='#!' className='nav-link'>
              Blog
            </a>
          </li>
          <li className='nav-item'>
            <a href='#!' className='nav-link'>
              Account
            </a>
          </li>
          <Button primary>View Plans</Button>
        </ul>
      </Container>
    </Nav>
  );
};

export default Navbar;
