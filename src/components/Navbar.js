import styled from 'styled-components';
import logo from '../images/logo.svg';
import { maxWidthLg } from '../abstracts/Mixins';
import { Button } from './styledElements/Button';
import Link from './Link';
import Responsive from '../abstracts/Responsive';

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

    ${Responsive.md`
      display: none; 
    `}
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <img src={logo} alt='insure logo' className='nav-logo' />
        <ul className='nav-list'>
          <Link text={'How We Work'} />
          <Link text={'Blog'} />
          <Link text={'Account'} />
          <Button primary>View Plans</Button>
        </ul>
      </Container>
    </Nav>
  );
};

export default Navbar;
